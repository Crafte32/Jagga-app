const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  location: String,
  description: String,
  image: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Property", propertySchema);