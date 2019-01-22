let errorHandler = function(err, req, res, next){
    let error = err.message;
    res.status(403).json({error});
}

exports.errorHandler = errorHandler;