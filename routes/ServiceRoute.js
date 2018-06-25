var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var service = require('../models/ServiceDetails');

router.get('/', function(req, res, next) {
    res.send("Service");
});

module.exports = router;