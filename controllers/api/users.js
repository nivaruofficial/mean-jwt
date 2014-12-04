var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var User = require('../../models/user')
var config = require('../../config')

router.get('/users', function (req, res, next) {
    if (!req.headers['x-auth']) {

        console.log('no x-auth');
        return res.sendStatus(401);
    }
    //console.log('req.headers is '+req.headers);
    console.log('req.headers is '+req.headers['x-auth']);
    var aut = req.headers['x-auth'];
    aut = aut.replace(/"([^"]+(?="))"/g, '$1');

    auth = jwt.decode(aut, config.secret);
    console.log('auth is '+auth);
    User.findOne({username: auth.username}, function (err, user) {
        if (err) { return next(err) }
        res.json(user)
    })
})

router.post('/users', function (req, res, next) {
    var user = new User({username: req.body.username})
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) { return next(err) }
        user.password = hash
        user.save(function (err) {
            if (err) { return next(err) }
            res.sendStatus(201)
        })
    })
})

module.exports = router