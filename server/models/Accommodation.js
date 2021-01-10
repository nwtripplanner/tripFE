const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema({
  time: Date,
  name: String,
  location: String,
  type: String,
  cost: Number
});
module.exports = mongoose.model('accommodation', accommodationSchema);