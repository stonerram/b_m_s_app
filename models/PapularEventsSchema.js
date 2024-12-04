const mongoose = require ('mongoose');

const papularEvents = new mongoose.Schema({
    title:String,
    image:String,
    place:String,
  });
  
  module.exports = mongoose.model('PapularEvents', papularEvents);