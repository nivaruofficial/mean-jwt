var router = require('express').Router(),
    User = require('../../models/user'),
    bcrypt = require('bcrypt'),
    jwt = require('jwt-simple'),
    config = require('../../config');

router.post('/sessions', function(req, res, next){
    var username = req.body.username;
    User.findOne({ username : username})
        .select('password')
        .exec(function(err,user){
            console.log(user);
            // Check for any error
            if(err) {return next(err)}
            if(!user) {return res.sendStatus(401)}
            bcrypt.compare(req.body.password,user.password, function(err, valid){
                // Check for any error
                if(err) {return next(err)}
                if(!valid) {return res.sendStatus(401)}
                var token = jwt.encode({username:username}, config.secret);
                console.dir(config.secret);
                res.json(token);
                console.log(token);
            });
        });
});

module.exports = router;
