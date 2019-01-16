const {User} = require('../dbSchemas/userSchema')

async function getUsers(userEmail, userId){
    let email = {};
    let id = {};

    if(userEmail){
        email = {userEmail: userEmail};
    }
    if(userId){
        id = {_id: userId};
    }

    const users = User.find(email, id)
    .sort({userEmail: 1})
    .select();

    return users;
};

exports.getUsers = getUsers;