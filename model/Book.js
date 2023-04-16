const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name:String,
    price:Number,
    auther:String,
    total_page:Number,
    about:String
});

module.exports = mongoose.model("Book",bookSchema);
