const mongoose = require('mongoose');

const TrendingSearchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('TrendingSearch', TrendingSearchSchema);
