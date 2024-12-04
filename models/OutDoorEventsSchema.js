const mongoose = require('mongoose');


const outDoorEvents = new mongoose.Schema({
    title:String,
    image:String,
    place:String,
  });
  
  module.exports = mongoose.model('OutDoorEvents', outDoorEvents);