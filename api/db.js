const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/food';
mongoose.connect(mongoUrl);
const db = mongoose.connection;
db.on("connected", () => {
    console.log("MongoDB connected successfully");
  });
module.exports = db;