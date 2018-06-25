var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var matrimony = require('../models/MatrimonyDetails');

router.get('/', function(req, res, next) {
    res.send("Matrimony");
});

module.exports = router;