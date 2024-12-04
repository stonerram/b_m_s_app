const mongoose = require("mongoose")

const premiereSchema = new mongoose.Schema({
    title: String,
    imageURL: String,
    year: Number,
    language: String,
    is4K: Boolean,
  });
  
 module.exports = mongoose.model('Premiere', premiereSchema);