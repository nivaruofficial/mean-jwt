var jwt = require('jwt-simple')
var config = require('./config')

module.exports = function(req, res, next){
    if (req.headers['x-auth']) {
        var aut = req.headers['x-auth'];
        aut = aut.replace(/"([^"]+(?="))"/g, '$1');
        req.auth = jwt.decode(aut, config.secret)
    }
    next();
}

