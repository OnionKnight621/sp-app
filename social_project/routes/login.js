const express = require('express');
const {User} = require('../dbSchemas/userSchema');

async function getUser(userEmail){
    const user = await User.findOne({userEmail: userEmail})
    .select({userName: 1, userPassword: 1, userEmail: 1});

    if (!user) {
        throw new Error("No such user");
    }

    return user;
};

const router = express.Router();

router.post('/', async (req, res) => {
    let foundedUser; 
    try{
        foundedUser = await getUser(req.body.userEmail);
    } catch (error) {
        return res.status(404).json({message: error});
    }

    if (foundedUser.userPassword !== req.body.userPassword){
        return res.status(403).json({message: "U have to enter password"});
    } 
    req.session.userEmail = foundedUser.userEmail;
    req.session.userId = foundedUser._id;

    console.log("Session id: " + req.session.id);
    return res.status(200).json({session: req.session});
});

module.exports = router;
