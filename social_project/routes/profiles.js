const express = require('express');
const fs = require('fs')
const {UserProfile} = require('../dbSchemas/profileSchema');
const {getUsers} = require('../utils/getUsers');
const {errorHandler} = require('../middleware/errorHandler');
const {mapTokenToUrl} = require('../utils/tokenMapper');
const {filesUpload} = require('../utils/multerUpload');
const config = require('../config/default');

const router = express.Router();
const avatarPath = config.avatar.avatarPath;

async function addAvatar(userEmail, id, profileType){
    const profile = await getProfileByType(userEmail, profileType)

    profile.userAvatar = id;

    const updated = await profile.save();
    console.log(updated);
};

function createImgUri(imgId){
    let imageUri = `${avatarPath}${imgId}`;

    return imageUri;
}

async function getProfiles(userEmail) {
    let email = {};
    if(userEmail){
        email = {userEmail: userEmail};
    }

    const profiles = await UserProfile.find(email);

    return profiles;
}

async function getProfileByType(userEmail, profileType){
    let type = {profileType: 'private'}
    let email = {userEmail: userEmail}
    if(profileType){
        type = {profileType: profileType}
    }

    const profile = await UserProfile.findOne({userEmail: userEmail, profileType: profileType})
    .select({userEmail: 1, userAvatar: 1, profileType: 1});

    return profile;
}

const mapPhotoTokenToUrl = mapTokenToUrl('userAvatar', 'userAvatarUri', createImgUri);

async function createUserProfile(firstName, lastName, userEmail, userAge, userId, userCellPhone, profileType, userInformation, userAddress){
    if(profileType === 'public'){
        userCellPhone = undefined;
        userAddress = undefined;
    }

    const profile = new UserProfile({
        userName: {
            firstName: firstName,
            lastName: lastName,
            fullName: `${firstName} ${lastName}`
        },
        userEmail: userEmail,
        userAge: userAge,
        userId: userId,
        userCellPhone: userCellPhone,
        profileType: profileType,
        userInformation: userInformation,
        userAddress: userAddress
    });

    const profiles = await getProfiles(userEmail);
    let firstProfile = profiles[0];
    if (firstProfile && firstProfile.profileType && firstProfile.profileType === profile.profileType) {
        throw new Error("Already exist");
    }
    if (profiles.length > 1) {
        throw new Error("Already exist");
    }

    return profile.save();
}

async function getUsersProfiles(userEmail, searchingUserEmail){
    let email = {};
    if(searchingUserEmail){
        email = {userEmail: searchingUserEmail};
    }

    const users = await getUsers(searchingUserEmail);
    const user = users[0];

    let profileType = 'public';

    if(user.userFriends.includes(userEmail)){
        profileType = 'private';
    }

    if(!searchingUserEmail){
        profileType = 'public';
    }

    if(userEmail === searchingUserEmail){
        const profiles = await UserProfile.find(email);
        if(!profiles){
            throw new Error("No such users");
        }

        return profiles;
    }

    const profiles = await UserProfile.find(email)
    .find({profileType: profileType});


    if(!profiles){
        throw new Error("No such users");
    }

    return profiles;
};

async function editProfile(userId, profileType, firstName, lastName, userAge, userCellPhone, userInformation, userAddress){
    if(!userId || !profileType){
        throw new Error("No user profile chosen");
    }

    const userProfile = await UserProfile.findOne({userId: userId, profileType: profileType});
    
    if(firstName){
        userProfile.userName.firstName = firstName;
        let first = userProfile.userName.fullName.split(' ')[0];
        userProfile.userName.fullName = userProfile.userName.fullName.replace(first, firstName);
    }
    if(lastName){
        userProfile.userName.lastName = lastName;
        let last = userProfile.userName.fullName.split(' ')[1];
        userProfile.userName.fullName = userProfile.userName.fullName.replace(last, lastName);
    }
    if(firstName && lastName){
        userProfile.userName.fullName = `${firstName} ${lastName}`;
    }
    if(userAge){
        userProfile.userAge = userAge;
    }
    if(userCellPhone){
        userProfile.userCellPhone = userCellPhone;
    }
    if(userInformation){
        userProfile.userInformation = userInformation;
    }
    if(userAddress){
        userProfile.userAddress = userAddress;
    }

    return await userProfile.save();
}

//fieldName, destination
let upload = filesUpload('avatar', './public/usersAvatars/')

let avatarUpload = async function(req, res, next){
    let result;

    try{
        result = await getProfileByType(req.session.userEmail,req.query.profileType);
        let avatarLocation = `${config.avatar.avatarLocation}${result.userAvatar}`;
        if(result.userAvatar != "default_avatar.png"){
            fs.unlink(avatarLocation);
        }
        upload(req, res, (err) =>{
            if (err){
                return next(new Error(err))
            }
            if(!req.file){
                return next(new Error("No files were uploaded"))
            }
            addAvatar(req.session.userEmail, req.file.filename, req.query.profileType)
            .then(() => {
                return next();
            })
            .catch(error => {
                return next(new Error(error))
            })
        });
    }catch (err){
        return next(new Error(err));
    }
}

router.post('/addavatar', avatarUpload, errorHandler, async (req, res) => {
    res.status(200).json({message: "File uploaded"});
});

router.get('/getprofiles', async (req, res) => {
    let result;
    let userEmail;
    if(req.query.userEmail){
        userEmail = req.query.userEmail;
    }

    try{
        result = await getUsersProfiles(req.session.userEmail, userEmail);
        let profilesArray = result.map(item => item.toJSON()).map(mapPhotoTokenToUrl);
        return res.status(200).json({profiles: profilesArray});
    }
    catch(exeption){
        return res.status(400).json({error: exeption.message});
    }
})

router.post('/createprofile', async (req, res) => {
    let result;

    try{
        result = await createUserProfile(req.body.firstName, req.body.lastName, req.session.userEmail, req.body.userAge, req.session.userId, req.body.userCellPhone, req.body.profileType, req.body.userInformation, req.body.userAddress);
        return res.status(200).json({message: "Your profile was succesfully created"});
    }
    catch(exeption){
        return res.status(400).json({error: exeption.message});
    }
});

router.put('/editprofile', async (req, res) => {
    let result;

    try{
        result = await editProfile(req.session.userId, req.body.profileType, req.body.firstName, req.body.lastName, req.body.userAge, req.body.userCellPhone, req.body.userInformation, req.body.userAddress);
        res.status(200).json({message: "Your profile was succesfully edited"});
    }
    catch(exeption){
        res.status(400).json({error: exeption});
    }
})

module.exports = router;