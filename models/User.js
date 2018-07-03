var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

  userId: { type: Number, unique: true},
  userName: { type: String, unique: true, trim: true},
  password: { type: String, trim: true},

  firstName: { type: String, lowercase: true, trim: true},
  middleName: { type: String, lowercase: true, trim: true},
  lastName: { type: String, lowercase: true, trim: true},
  gender: Boolean,
  dateOfBirth: Date,

  contact: Number,
  paymentProvider: Number,
  email: String
});

module.exports = mongoose.model('User', UserSchema);