const express = require ('express');
const router = express.Router();
const SportsWay = require('../models/sportsWaySchema');



router.get("/sports_way", async (req,res) =>{
    const sports = await SportsWay.find();
    res.json(sports);
  })


  module.exports = router;
