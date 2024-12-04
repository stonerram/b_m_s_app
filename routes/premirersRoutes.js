const express = require ('express');
const router = express.Router();
const Premiere = require('../models/PremiereSchema');



router.get('/premieres', async (req, res) => {
    const premieres = await Premiere.find();
    res.json(premieres);
  });

  module.exports = router;
