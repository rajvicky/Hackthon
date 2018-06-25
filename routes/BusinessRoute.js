var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var business = require('../models/BusinessDetails');

router.get('/', function(req, res, next) {
    res.send("Business");
});

module.exports = router;