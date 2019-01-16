let errorHandler = function(err, req, res, next){
    let error = err.message;
    res.status(500).json({error});
}

exports.errorHandler = errorHandler;