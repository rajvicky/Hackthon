var mongoose = require('mongoose');

var postService = new mongoose.Schema({service: Number,location: String,experience: Number,summary: String,cost: Number});

var askService = new mongoose.Schema({service: Number,location: String,summary: String,cost: Number});

var ServiceDetailsSchema = new mongoose.Schema({
  userId: Number,

  youAre: Number,
  postService: postService,
  askService: askService,

  rating: Number
});

module.exports = mongoose.model('ServiceDetails', ServiceDetailsSchema);