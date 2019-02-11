const multer = require('multer');
const path = require('path');

function filesUpload(fieldName, destination){
    const storage = multer.diskStorage({
        destination: destination,
        filename: function(req, file, cb){
            cb(null, file.fieldname + req.session.userEmail + '-' + Date.now() + path.extname(file.originalname));
        }
    });
    
    function checkFileType(file, cb){
        const fileTypes = /jpeg|jpg|png|gif/;
        const extName = fileTypes.test(path.extname(file.originalname));
        if(!extName){
            return cb("Error: images only");
        }
        return cb(null, true);
    };

    let upload = multer({
        storage: storage,
        limits: {fileSize: 5000000},
        fileFilter: function(req, file, cb){
            checkFileType(file, cb);
        }
    }).single(fieldName);

    return upload;
}

exports.filesUpload = filesUpload;