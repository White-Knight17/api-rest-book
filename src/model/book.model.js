import { Schema, model } from "mongoose";

const bookSchema = Schema({
    title: String,
    author: String,
    genre: String,
    publication_date: String,
});


export default model('books', bookSchema);