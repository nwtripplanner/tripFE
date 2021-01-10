const mongoose = require("mongoose");
const transportation = require("./Transportation");
const accommodation = require("./Accommodation");
const activity = require("./Activity");


const tripSchema = new mongoose.Schema({
    startDay: Date,
    endDay: Date,
    startLoc: String,
    endLoc: String,
    savings: Number,
    transportations: [transportation.schema],
    accommodations: [accommodation.schema],
    activities: [activity.schema]
});
module.exports = mongoose.model('trip', tripSchema);