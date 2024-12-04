const mongoose  = require ('mongoose');

const sportsWay = new mongoose.Schema({
    title:String,
    image:String,
    place:String,
    date:String,
  });
  
  module.exports = mongoose.model('SportsWay', sportsWay);