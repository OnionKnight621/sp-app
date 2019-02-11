const mongoose = require('mongoose');

const UserProfile = mongoose.model('UserProfile', new mongoose.Schema({
    userName: {
        firstName: {
            type: String, 
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        lastName: {
            type: String, 
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        fullName: {
            type: String, 
        }
    },
    userEmail: {
        type: String,
        required: true,
    },
    userAge: {
        type: Number,
        default: 0,
    },
    userAvatar: {
        type: String,
        default: "default_avatar.png",
    },
    userId: {
        type: String,
        required: true,
    },
    userCellPhone: {
        type: String,
    },
    profileType: {
        type: String,
        required: true,
        default: 'private',
        enum: ['private', 'public'],
    },
    userInformation: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    userAddress: {
        type: String,
    }
}));

exports.UserProfile = UserProfile;