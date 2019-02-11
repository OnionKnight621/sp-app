const mongoose = require('mongoose');

let UserComment = mongoose.model("userComment", new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true,
    },
    answerOnComment: {
        type: String,
        default: "",
    },
    commentContent: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
    },
    commentTime: {
        type: Date,
        default: Date.now(),
    }
}));

exports.UserComment = UserComment;