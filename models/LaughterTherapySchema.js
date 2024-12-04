const mongoose =require('mongoose');


const laughterTherapy = new mongoose.Schema({
    title:String,
    image:String,
    place:String,
  });
  
  module.exports = mongoose.model('LaughterTherapy', laughterTherapy);