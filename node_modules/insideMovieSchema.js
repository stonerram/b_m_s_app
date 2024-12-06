const mongoose = require('mongoose');


let insideMovieSchema = new mongoose.Schema({
    title:String,
    genre:String,
    language:String,
    city:String,
    format:String,
    image: String,
    background:String,
    description:String,
    cast: [{ name: String, image: String }], 
    crew: [{ name: String, image: String }],
 })
 
 module.exports =  mongoose.model("Movie1",insideMovieSchema  );
 
