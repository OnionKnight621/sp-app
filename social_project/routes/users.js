const express = require('express');
const {User} = require('../dbSchemas/userSchema');
const {checkSession} = require('../middleware/checkSession')
const {errorHandler} = require('../middleware/errorHandler')

const router = express.Router();

async function createUser(userName, userPassword, userEmail){
    const user = new User({
        userName: userName,
        userPassword: userPassword,
        userEmail: userEmail
    });

    const users = await getUsers(userEmail);
    const firstUser = users[0];
    if(firstUser){
        throw new Error("User with such email already exist")
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
    const sender = await getUsers(senderEmail);
    const receiver = await getUsers(receiverEmail);
    const snd = sender[0];
    const rec = receiver[0];

    if(!receiverEmail || !rec){
        throw new Error("No such user")
    }

    rec.friendRequests.push(snd.userEmail);

    return rec.save();
};

async function checkFriendRequests(userEmail){
    const user = await getUsers(userEmail);

    const requests = user[0].friendRequests;

    return await requests;
}

async function acceptFriendRequest(receiverEmail, senderEmail){
    const receiver = await getUsers(receiverEmail);
    const sender = await getUsers(senderEmail);
    const rec = receiver[0];
    const snd = sender[0];
    const requests = user.friendRequests;

    if(!senderEmail){
        throw new Error("No such request");
    }

    if(!requests.includes(senderEmail)){
        throw new Error("No such request");
    }

    rec.userFriends.push(senderEmail);
    snd.userFriends.push(receiverEmail);
    rec.friendRequests.pull(senderEmail);

    rec.save();
    snd.save();

    return rec.userFriends;
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

    res.status(200).json({users: result})
});

router.get('/getfriends', async (req, res) => {
    let result;
    result = await getUsers(req.session.userEmail);

    if(!result){
        return res.status(404).json({error: "No such user"});
    }
    let friends = result[0].userFriends;

    res.status(200).json({userFriends: friends})
})

router.post('/sendfriendrequest', checkSession, errorHandler, async (req, res) => {
    let result;

    try{
        result = await sendFriendRequest(req.session.userEmail, req.body.userEmail);
        return res.status(200).json({message: "Request was sent", result: result});
    }
    catch(exeption){
        return res.status(400).json({error: error.message})
    }
})

router.get('/checkfriendrequest', checkSession, errorHandler, async (req, res) => {
    const result = await checkFriendRequests(req.session.userEmail);
    if(!result){
        return res.status(400).json({error: "Error"})
    }
    res.status(200).json({friendRequests: result})
})

router.post('/acceptfriendrequest', checkSession, errorHandler, async (req, res) => {
    let result;

    try{
        result = await acceptFriendRequest(req.session.userEmail, req.body.friend);
        return res.status(200).json({message: "Request was aceepted", result: result})
    }
    catch(exeption){
        return res.status(400).json({error: exeption.message})
    }
})

router.post('/registration', async (req, res) => {
    let result;

    try{
        result = await createUser(req.body.userName, req.body.userPassword, req.body.userEmail);
        return res.status(200).json({message: "User created succesfully", user: result});
    }
    catch(exeption){
        res.status(400).json({error: exeption.message})
    }
});

module.exports = router;