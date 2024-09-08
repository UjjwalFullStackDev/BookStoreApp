import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    category:String,
    image:String
})

const Book = mongoose.model("Book", bookSchema);

export default Book;