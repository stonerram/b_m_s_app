const mongoose = require ('mongoose');


const latestPlay = new mongoose.Schema({
    title:String,
    image:String,
    place:String,
  });
  
  module.exports = mongoose.model('LatestPlay', latestPlay);