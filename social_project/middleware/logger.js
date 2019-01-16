let logger = function(req, res, next){
    console.log("---------------------------");
    console.log("Time:    ",new Date())
    console.log("Host:    ",req.headers.host);
    console.log("From:    ",req.headers.origin);
    console.log("Referer: ",req.headers.referer);
    console.log("Body:    ",req.body);
    console.log("---------------------------");
    console.log("")

    next();
}

exports.logger = logger;