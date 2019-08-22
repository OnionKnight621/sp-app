const config = {};

config.appPort = 5001;
config.appUri = `localhost:${config.appPort}`;
config.avatar = {
    avatarPath: `http://${config.appUri}/usersAvatars/`,
    avatarDefaultLocation: "public\\usersAvatars\\default_avatar.png",
    avatarLocation: "public\\usersAvatars\\"
};
config.postImage = {
    imagePath: `http://${config.appUri}/postImages/`,
    imageLocation: "public\\postImages\\"
};

module.exports = config;