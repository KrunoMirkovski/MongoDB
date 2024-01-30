//? shemata da e naslov, opis, ocenka, vreme, aftor
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  naslov: {
    type: String,
    required: [true, "Enter blog title."],
  },
  opis: {
    type: String,
  },
  ocenka: {
    type: Number,
    default: 3,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avtor: {
    type: String,
    required: [true, "Enter the name of the author."],
  },
});

const Blog = mongoose.model("blogs", blogSchema);

module.exports = Blog;
