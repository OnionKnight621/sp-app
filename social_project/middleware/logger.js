let logger = function(req, res, next){
    console.log(" -------------------------- ");
    console.log("Body: ",req.body);

    next();
}

exports.logger = logger;