const mongoose = require("mongoose");
const paneerSchema = new mongoose.Schema({
  dish: { type: String, required: true },
  recipe1: { type: String, required: true },
  recipe2: { type: String, required: true },
  nature: { type: String, enum: ["spicy", "sweet"], required: true },
});

const Paneer = mongoose.model("Paneer", paneerSchema);
module.exports = Paneer;
