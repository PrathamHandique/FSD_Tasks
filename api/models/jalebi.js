const mongoose = require("mongoose");
const jalebiSchema = new mongoose.Schema({
  dish: { type: String, required: true },
  recipe1: { type: String, required: true },
  recipe2: { type: String, required: true },
  nature: { type: String, enum: ["spicy", "sweet"], required: true },
});

const Jalebi = mongoose.model("Jalebi", jalebiSchema);
module.exports = Jalebi;

