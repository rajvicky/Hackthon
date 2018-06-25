var mongoose = require('mongoose');

var experience = new mongoose.Schema({companyName: String,title: String,location: String,startDate: Date,endDate: Date });

var education = new mongoose.Schema({schoolName: String,degree: String,fieldOfStudy: String,startDate: Date,endDate: Date });

var ProfessionalDetailsSchema = new mongoose.Schema({
  userId: Number,

  summary: String,
  rating: Number,
  education: [education],
  experience: [experience],
  skills: [Number],
  endorsement: String,
  linkedInId: String
});

module.exports = mongoose.model('ProfessionalDetails', ProfessionalDetailsSchema);