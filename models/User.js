var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

  email: { type: String, unique: true},
  password: { type: String, trim: true},

  contact: Number,
  balance: Number,
  paymentProvider: Number
});

module.exports = mongoose.model('User', UserSchema);