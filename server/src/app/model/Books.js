const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    genre: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    url:{
      type:String
    },
    resume: {
      type: String,
    },
  }
);

module.exports = mongoose.model("Book", BookSchema);