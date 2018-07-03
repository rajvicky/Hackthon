var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/User');

router.get('/user', function(req, res, next) {
    res.send("User");
});

module.exports = router;