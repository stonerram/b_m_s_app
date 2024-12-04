const express = require ('express');
const router = express.Router();
const LatestPlay = require('../models/LatestPlaySchema');



router.get("/latest_play", async (req,res) =>{
    const latestPlays = await LatestPlay.find();
    res.json(latestPlays);
  });


  module.exports = router;
