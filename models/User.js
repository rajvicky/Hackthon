var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userId: { type: Number, unique: true},
  userName: { type: String, unique: true, trim: true},
  password: { type: String, trim: true},

  firstName: { type: String, lowercase: true, trim: true}, /** Must be as on Aadhar card and/or Pan card */
  middleName: { type: String, lowercase: true, trim: true},
  lastName: { type: String, lowercase: true, trim: true},
  gender: Boolean,
  dateOfBirth: Date,
  currentAddress: String,
  city: String,
  state: String,
  country: { type: String, default: 'India'},

  aadharId: Number,
  panId: Number,

  countryCode: { type: String, default: '+91'},
  contact: Number,
  paymentProvider: Number,
  email: String,
  referredBy: String
});

module.exports = mongoose.model('User', UserSchema);