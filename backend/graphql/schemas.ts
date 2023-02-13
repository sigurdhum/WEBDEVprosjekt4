import mongoose from "mongoose";

export const movieSchema = new mongoose.Schema({
   
    title: {
        type: String,
    },
    release_year: {
        type: Number,
    },
    genre: {
        type: Array,
    },
    reviews: {
        type: Array,
    },
    description: {
        type: String,
    },
    bildeURL: {
        type: String,
    },
    length: {
        type: Number,
    },
    age: {
        type: Number,
    },
    language: {
        type: String,
    },
    
});
movieSchema.index({title: 'text', genre: 'text'});

/**
 * Schema sier hvordan strukturen på dataene skal være.
 */