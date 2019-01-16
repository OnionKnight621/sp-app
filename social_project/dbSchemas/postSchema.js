const mongoose = require('mongoose');

let UserPost = mongoose.model("userPost", new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    postImage: {
        type: String,
        default: ''
    },
    postType: {
        type: String,
        required: true,
        default: 'private'
    },
    numberOfComments: {
        type: Number,
        default: 0
    },
    postTime: {
        type: Date,
        default: Date.now()
    }
}));

exports.UserPost = UserPost;