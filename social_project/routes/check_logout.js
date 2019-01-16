const express = require('express');

const router = express.Router();

router.get('/check', async (req, res) => { 
    if(!req.session){
        return res.status(404).json({message: "Cannot find session"});
    }
    res.status(200).json({message: `User "${req.session.userEmail}" is logged`, sessionId: req.session.id});
});

router.get('/logout', (req, res) => {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
          if(err) {
            return next(err);
          }
          
          return res.status(200).json({message: "User was logged out"});
        });
    }
})

module.exports = router;