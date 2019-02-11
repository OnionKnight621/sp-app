const express = require('express');
const {UserPost} = require('../dbSchemas/postSchema');
const {getUsers} = require('../utils/getUsers');
const {errorHandler} = require('../middleware/errorHandler');
const {mapTokenToUrl} = require('../utils/tokenMapper');
const {filesUpload} = require('../utils/multerUpload');
const {getPostById} = require('../utils/getPost');
const config = require('../config/default');

const router = express.Router();
const imagePath = config.postImage.imagePath;

async function addImage(postId, id){
    const post = await getPostById(postId);

    post.postImage = id;

    const updated = await post.save();
    console.log(updated);
};

function createImgUri(imgId){
    let imageUri = `${imagePath}${imgId}`;

    return imageUri;
};

const mapPhotoTokenToUrl = mapTokenToUrl('postImage', 'postImageUri', createImgUri);

async function createPost(userEmail, userId, postContent, postImage, postType, numberOfComments){
    const post = new UserPost({
        userEmail: userEmail,
        userId: userId,
        postContent: postContent,
        postImage: postImage,
        postType: postType,
        numberOfComments: numberOfComments,
        postTime: Date.now(),
    })

    return post.save();
};

async function getPost(userEmail, searchingUserEmail, startOffset, limit){
    let email = {};
    let searchingUser;
    if(searchingUserEmail){
        searchingUser = searchingUserEmail;
    }
    if(userEmail && searchingUserEmail){
        email = {userEmail: searchingUserEmail};
    }

    let postType = {};
    const userArr = await getUsers(searchingUser);
    const user = userArr[0];

    if(!user.userFriends.includes(userEmail)){
        postType = {postType: 'public'};
    }

    if(!searchingUserEmail){
        postType = {postType: 'public'};
    }

    const posts = await UserPost.aggregate([
        {
            $sort: {userEmail: 1}
        },
        {
            $match: {
                $and: [email, postType]
            }
        },
        {
            $addFields: {
                id: {$toString: "$_id"}
            }
        },
        {
            $lookup: {
                from: 'usercomments',
                localField: 'id',
                foreignField: 'postId',
                as: 'comments'
            }
        },
        // {$unwind: {
        //     path: "$comments", preserveNullAndEmptyArrays: true
        // }},
        // {$sort: {"comments.commentTime": -1}},
        // {$group: {
        //     _id: "$_id",
        //     numberOfComments: {$first: "$numberOfComments"},
        //     postContent: {$first: "$postContent"},
        //     postImage: {$first: "$postImage"},
        //     postImageUri: {$first: "$postImageUri"},
        //     postType: {$first: "$postType"},
        //     userEmail: {$first: "$userEmail"},
        //     userId: {$first: "$userId"},
        //     id: {$first: "$id"},
        //     comments: {"$push": "$comments"}
        // }},
        // {$project: {
        //     _id: "$_id",
        //     numberOfComments: 1,
        //     postContent: 1,
        //     postImage: 1,
        //     postImageUri: 1,
        //     postType: 1,
        //     userEmail: 1,
        //     userId: 1,
        //     id: 1,
        //     comments: "$comments"
        // }},
        {
            $sort: {postTime: -1}
        },
        {
            $skip: startOffset
        },
        {
            $limit: limit
        },
    ])

    return await posts;
};

//fieldName, destination
let upload = filesUpload('postImage', './public/postImages/')

let avatarUpload = async function(req, res, next){

    try{
        upload(req, res, (err) =>{
            if (err){
                return next(new Error(err));
            }
            if(!req.file){
                return next(new Error("No files were uploaded"));
            }
            addImage(req.query.postId, req.file.filename)
            .then(() => {
                return next();
            })
            .catch(error => {
                return next(new Error(error));
            })
        });
    }catch (err){
        return next(new Error(err));
    }
};

router.post('/addpostimage', avatarUpload, errorHandler, async (req, res) => {
    res.status(200).json({message: "File uploaded"});
});

router.get('/userposts', async (req, res) => {
    let userEmail;
    if(req.query.userEmail){
        userEmail = req.query.userEmail;
    }
    let result;

    //default range values
    let startOffset = 0;
    let limit = 5;

    //check if pag params are integer positive numbers
    if(req.query.pagStart && Number.isInteger(+req.query.pagStart) && +req.query.pagStart > 0){
        startOffset = +req.query.pagStart;
    }
    if(req.query.pagEnd && Number.isInteger(+req.query.pagEnd) && +req.query.pagEnd > 0){
        limit = +req.query.pagEnd;
    }

    result = await getPost(req.session.userEmail, userEmail, startOffset, limit);
    let postsArray = result.map(mapPhotoTokenToUrl);

    if(!result){
        return res.status(400).json({error: "No posts"});
    }
    return res.status(200).json({posts: postsArray});    
});

router.post('/createpost', async (req, res) => {
    let post = await createPost(req.session.userEmail, req.session.userId, req.body.postContent, req.body.postImage, req.body.postType);
    if(!post){
        return res.status(500).json({error: "Cannot create post"});
    } 
    return res.status(201).json({message: "Post was succesfully created", post: post});
});

module.exports = router;