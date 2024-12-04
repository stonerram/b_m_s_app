const express = require ('express');
const router = express.Router();
const LaughterTherapy = require('../models/OutDoorEventsSchema');



router.get("/laughter_therapy", async (req,res) =>{
    const laughTherapy = await LaughterTherapy.find();
    res.json(laughTherapy);
  });

  module.exports = router;
