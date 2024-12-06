const express = require("express");
const Movies1 = require('../models/insideMovieSchema')
const router = express.Router();


// Get all movies
router.get("/Movie1", async (req, res) => {
    try {
        const movies1 = await Movies1.find().select("image"); // Only fetch the 'image' field
        console.log(movies1); // Debugging: Log fetched data
        res.json(movies1);
    } catch (error) {
        res.status(500).send("Error fetching movie images: " + error.message);
    }
});


// Get movie by ID
router.get("/Movie1/:id", async (req, res) => {
    try {
        const movie1 = await Movies1.findById(req.params.id);
        if (movie1) {
            res.json(movie1);
        } else {
            res.status(404).send("Movie not found");
        }
    } catch (error) {
        res.status(500).send("Error fetching movie: " + error.message);
    }
});

module.exports = router;
