let checkSession = async function(req, res, next){
    if(!req.session){
        return next(new Error("not found"));
    }
    if(!req.session.userEmail){
        return next(new Error("not logged"));
    }
    
    next();
}

exports.checkSession = checkSession;