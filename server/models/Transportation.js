const mongoose = require("mongoose");

const transportationSchema = new mongoose.Schema({
    time: Date,
    mode: String,
    start: String,
    destination: String,
    cost: Number
  });
  module.exports = mongoose.model('transportation', transportationSchema)