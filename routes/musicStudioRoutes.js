
const express = require ('express');
const router = express.Router();
const MusicStudio = require('../models/MusicStudioSchema');



router.get('/music-studio', async (req,res) => {
    const musicStudios = await MusicStudio.find();
    res.json(musicStudios)
  });


  module.exports = router;
