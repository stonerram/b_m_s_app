
const express = require('express');
const EventCategory = require('../models/LiveEventsSchema');
const router = express.Router();

router.get('/liveevents', async (req, res) => {
    const categories = await EventCategory.find();
    res.json(categories);
  });

  module.exports = router;
