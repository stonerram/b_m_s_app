const express = require ('express');
const router = express.Router();
const OutDoorEvents = require('../models/OutDoorEventsSchema');


router.get ('/out_door_events', async (req,res) =>{
    const outDoorEvent = await OutDoorEvents.find();
    res.json(outDoorEvent);
  });


  module.exports = router;
