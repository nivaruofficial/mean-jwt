var express = require('express'),
    router = express.Router();

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));
//router.use(express.static(__dirname + '/../layouts'));

router.get('*', function(req,res){
   res.sendfile('views/app.html');
});

module.exports = router;