const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
  });

  module.exports= mongoose.model("Movie", movieSchema);
