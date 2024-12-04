const mongoose = require('mongoose');


const musicStudio = new mongoose.Schema({
    title:String,
    image:String,
    venue:String,
    course:String,
    place:String,
  
  });
  
  module.exports = mongoose.model('MusicStudio', musicStudio);