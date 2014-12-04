var router = require('express').Router()
var jwt = require('jwt-simple')
var config = require('../config')

router.use('/api', require('./api'))
router.use('/', require('./static'))

module.exports = router