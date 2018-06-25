var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var business = require('../models/User');

router.get('/', function(req, res, next) {
    console.log("Login Triggered");
});

module.exports = router;