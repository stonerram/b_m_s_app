

const express = require('express');
const Movie = require('../models/MoviesSchema');
const router = express.Router();


router.get("/movies", async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch movies" });
    }
  });
  
  router.post("/movies", async (req, res) => {
    try {
      const { name, image, description } = req.body;
  
      const newMovie = new Movie({
        name,
        image,
        description,
      });
  
      await newMovie.save();
      res.status(201).json(newMovie);
    } catch (err) {
      res.status(500).json({ error: "Failed to add movie" });
    }
  });

  module.exports = router;
