
const mongoose = require("mongoose");

const SneakerSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("Sneaker", SneakerSchema);
