const express = require ('express');
const router = express.Router();
const PapularEvents = require('../models/PapularEventsSchema');


router.get("/papular_events", async (req,res) =>{
    const papularEvents = await PapularEvents.find();
    res.json(papularEvents);
  });

  module.exports = router;
