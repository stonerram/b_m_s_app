const express = require('express');
const TrendingSearch = require('../models/TrendingSearch');
const router = express.Router();

router.get('/trending-searches', async (req, res) => {
  try {
    const data = await TrendingSearch.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending searches', error });
  }
});

router.post('/trending-searches', async (req, res) => {
  try {
    const newSearch = new TrendingSearch(req.body);
    await newSearch.save();
    res.status(201).json(newSearch);
  } catch (error) {
    res.status(500).json({ message: 'Error adding trending search', error });
  }
});

module.exports = router;
