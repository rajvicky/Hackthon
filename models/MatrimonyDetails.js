var mongoose = require('mongoose');

var experience = new mongoose.Schema({companyName: String,title: String,location: String,salary: Number});

var education = new mongoose.Schema({schoolName: String,degree: String,fieldOfStudy: String,yearOfPassing: Number});

var time = new mongoose.Schema({hour: Number,minute: Number});

var height = new mongoose.Schema({feet: Number,inch: Number});

var MatrimonyDetailsSchema = new mongoose.Schema({
  userId: Number,

  timeOfBirth: time,
  religion: String,
  caste: String,
  subCaste: String,
  motherTongue: String,
  height: height,
  bloodGroup: String,

  education: [education],
  experience: experience,
  
  aboutMe: String,
  expectations: String,
  rating: Number
});

module.exports = mongoose.model('MatrimonyDetails', MatrimonyDetailsSchema);