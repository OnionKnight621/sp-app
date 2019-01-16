const {UserPost} = require('../dbSchemas/postSchema');

async function getPostById(postId){
    const post = await UserPost.findOne({_id: postId})
    .select();

    return await post;
};

exports.getPostById = getPostById;