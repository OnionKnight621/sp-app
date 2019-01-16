const mongoose = require('mongoose');

let User = mongoose.model("User", new mongoose.Schema({
    userName: {
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 30
    },
    userPassword: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 30
    },
    userEmail: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50
    },
    userFriends: {
        type: Array,
        default: []
    },
    friendRequests: {
        type: Array,
        default: []
    }
}));

exports.User = User;