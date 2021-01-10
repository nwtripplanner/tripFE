const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    time: Date,
    name: String,
    location: String,
    type: String,
    cost: Number
  });
module.exports = mongoose.model('activity', activitySchema);