const express = require('express');
const {UserComment} = require('../dbSchemas/commentSchema');
const {getPostById} = require('../utils/getPost');

const router = express.Router();

async function createComment(userId, userEmail, postId, answerOnComment, commentContent){
    const comment = new UserComment({
        userId: userId,
        userEmail: userEmail,
        postId: postId,
        answerOnComment: answerOnComment,
        commentContent: commentContent,
        commentTime: Date.now()
    });

    const post = await getPostById(postId);
    post.numberOfComments++;

    post.save()

    comment.save()
    
    return comment;
}

router.post('/createcomment', async (req, res) => {
    let result;

    try{
        result = await createComment(req.session.userId, req.session.userEmail, req.body.postId, req.body.answerOnComment, req.body.commentContent);
        return res.status(200).json({message: "Your comment was succesfully created", comment: result});
    }
    catch(exeption){
        return res.status(400).json({error: exeption})
    }  
});

module.exports = router;