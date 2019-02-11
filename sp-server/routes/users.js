const express = require('express');
const {User} = require('../dbSchemas/userSchema');
const {checkSession} = require('../middleware/checkSession')
const {errorHandler} = require('../middleware/errorHandler')

const router = express.Router();

async function createUser(userName, userPassword, userEmail){
    const user = new User({
        userName: userName,
        userPassword: userPassword,
        userEmail: userEmail,
    });

    const users = await getUsers(userEmail);
    const firstUser = users[0];
    if(firstUser){
        throw new Error("User with such email already exist");
    }
    
    return user.save();
};

async function getUsers(userEmail){
    let email = {};

    if(userEmail){
        email = {userEmail: userEmail};
    }

    const users = User.find(email)
    .sort({userEmail: 1})
    .select();

    return users;
};

async function sendFriendRequest(senderEmail, receiverEmail){
    const senderArr = await getUsers(senderEmail);
    const receiverArr = await getUsers(receiverEmail);
    const sender = senderArr[0];
    const receiver = receiverArr[0];
    const friendReqObj = {};

    if(!receiverEmail || !receiver){
        throw new Error("No such user")
    }
    if(senderEmail === receiverEmail){
        throw new Error("Forever alone")
    }
    friendReqObj.userEmail = sender.userEmail;
    friendReqObj.userName = sender.userName;

    receiver.friendRequests.push(friendReqObj);

    return receiver.save();
};

async function checkFriendRequests(userEmail){
    const user = await getUsers(userEmail);

    const requests = user[0].friendRequests;

    return await requests;
};

async function acceptFriendRequest(receiverEmail, senderEmail){
    if(!senderEmail){
        throw new Error("No such request");
    }

    const receiverArr = await getUsers(receiverEmail);
    const senderArr = await getUsers(senderEmail);
    const receiver = receiverArr[0];
    const sender = senderArr[0];
    const senderObj = {};
    const receiverObj = {};
    const requests = receiver.friendRequests;
    let foundRequest = false;

    for(let i = 0; i < requests.length; i++){
        if(requests[i].userEmail === senderEmail){
            foundRequest = true;

            senderObj.userEmail = sender.userEmail;
            senderObj.userName = sender.userName;

            receiverObj.userEmail = receiver.userEmail;
            receiverObj.userName = receiver.userName;

            receiver.userFriends.push(senderObj);
            sender.userFriends.push(receiverObj);
            receiver.friendRequests.pull(senderObj);
        }
    }

    if(!foundRequest){
        throw new Error("No such request");
    }

    receiver.save();
    sender.save();

    return receiver.userFriends;
};

async function rejectFriendRequest(senderEmail){
    if(!senderEmail){
        throw new Error("No such request");
    }

    const senderArr = await getUsers(senderEmail);
    const sender = senderArr[0];

    sender.friendRequests.splice(sender.friendRequests.indexOf(receiverEmail), 1);

    sender.save();

    return rec.friendRequests;
};

async function deleteFriend(userEmail, friendEmail){
    if(!friendEmail){
        throw new Error("No friend to delete");
    }
    const userArr = await getUsers(userEmail);
    const friendArr = await getUsers(friendEmail);
    const user = userArr[0];
    const friend = friendArr[0];

    user.userFriends.splice(user.userFriends.indexOf(friendEmail), 1);
    friend.userFriends.splice(friend.userFriends.indexOf(userEmail), 1);

    user.save();
    friend.save();

    return user.userFriends;
};

router.get('/getusers', async (req, res) => {
    let result;
    let userEmail;

    if(req.query.userEmail){
        userEmail = req.query.userEmail;
    }

    result = await getUsers(userEmail);

    if(!result){
        return res.status(404).json({error: "No such user"});
    }

    res.status(200).json({users: result});
});

router.get('/getfriends', async (req, res) => {
    let result;
    result = await getUsers(req.session.userEmail);

    if(!result){
        return res.status(404).json({error: "No such user"});
    }
    let friends = result[0].userFriends;

    res.status(200).json({userFriends: friends})
});

router.delete('/deletefriend', checkSession, errorHandler, async (req, res) => {
    let result;
    const friendEmail = req.body.friendEmail;

    try{
        result = await deleteFriend(req.session.userEmail, friendEmail);
        return res.status(200).json({message: "Friend was deleted", result: result});
    }
    catch(exeption){
        return res.status(400).json({error: exeption.message});
    }
});

router.post('/sendfriendrequest', checkSession, errorHandler, async (req, res) => {
    let result;

    try{
        result = await sendFriendRequest(req.session.userEmail, req.body.userEmail);
        return res.status(200).json({message: "Request was sent", result: result});
    }
    catch(exeption){
        return res.status(400).json({error: exeption.message});
    }
});

router.get('/checkfriendrequest', checkSession, errorHandler, async (req, res) => {
    const result = await checkFriendRequests(req.session.userEmail);

    if(!result){
        return res.status(400).json({error: "Error"});
    }
    res.status(200).json({friendRequests: result});
});

router.post('/acceptfriendrequest', checkSession, errorHandler, async (req, res) => {
    let result;

    try{
        result = await acceptFriendRequest(req.session.userEmail, req.body.friend);
        return res.status(200).json({message: "Request was aceepted", result: result})
    }
    catch(exeption){
        return res.status(400).json({error: exeption.message})
    }
});

router.post('/rejectfriendrequest', checkSession, errorHandler, async (req, res) => {
    let result;
    const friendEmail = req.body.friendEmail;

    try{
        result = await rejectFriendRequest(friendEmail);
        return res.status(200).json({message: "Request was rejected", result: result});
    }
    catch(exeption){
        return res.status(400).json({error: exeption.message});
    }
});

router.post('/registration', async (req, res) => {
    let result;

    try{
        result = await createUser(req.body.userName, req.body.userPassword, req.body.userEmail);
        return res.status(200).json({message: "User created succesfully", user: result});
    }
    catch(exeption){
        res.status(400).json({error: exeption.message});
    }
});

module.exports = router;