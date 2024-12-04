const mongoose = require('mongoose')


const eventCategorySchema = new mongoose.Schema({
    name: String,
    eventCount: Number,
    imageUrl: String,
  });
  
  module.exports = mongoose.model('EventCategory', eventCategorySchema);