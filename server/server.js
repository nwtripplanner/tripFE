const express = require("express");
const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const passport = require("passport");
//const users = require("./routes/api/users");

const app = express();
const db = require('./db')

// module.exports = mongoose.model("User", UserSchema);
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', function () {
  console.log("Connected!");
});

const activitySchema = new mongoose.Schema({
  time: Date,
  name: String,
  location: String,
  type: String,
  cost: Number
});
const activity = mongoose.model('activity', activitySchema);

const accomadationSchema = new mongoose.Schema({
  time: Date,
  name: String,
  location: String,
  type: String,
  cost: Number
});
const accomadation = mongoose.model('accomadation', accomadationSchema);

const transportationSchema = new mongoose.Schema({
  time: Date,
  mode: String,
  start: String,
  destination: String,
  cost: Number
});
const transportation = mongoose.model('transportation', transportationSchema)

const tripSchema = new mongoose.Schema({
  startDay: Date,
  endDay: Date,
  startLoc: String,
  endLoc: String,
  savings: Number,
  transportations: [transportationSchema],
  accomadations: [accomadationSchema],
  activities: [activitySchema]
});
const trip = mongoose.model('trip', tripSchema);
const testActivity = new activity({
  time: new Date,
  name: "Cycling",
  location: "Sea Wall",
  type: "Sport",
  cost: 50
});
const testActivity1 = new activity({
  time: new Date,
  name: "Hiking",
  location: "Grouse Grind",
  type: "Sport",
  cost: 20
});

const testAccomadation = new accomadation({
  time: new Date,
  name: "Fairmont Hotel",
  location: "Downtown Vancouver",
  type: "Hotel",
  cost: 500
});
const testAccomadation1 = new accomadation({
  time: new Date,
  name: "Cabin on the mountain",
  location: "Grouse Mountain",
  type: "Airbnb",
  cost: 300
});

const testTransportation = new transportation({
  time: new Date,
  mode: "Bus",
  start: "Fairmont Hotel",
  destination: "Stanley Park",
  cost: 2.85
});

const testTransportation1 = new transportation({
  time: new Date,
  mode: "Taxi",
  start: "Stanley Park",
  destination: "Grouse Mountain",
  cost: 30
});

const testTrip = new trip({
  startDay: new Date,
  endDay: new Date,
  startLoc: "Downtown Vancouver",
  endLoc: "Grouse Mountain",
  savings: 700,
  transportations: [testTransportation, testTransportation1],
  accomadations: [testAccomadation, testAccomadation1],
  activities: [testActivity, testActivity1]
});

testAccomadation.save(function (err) {
  if (err) return console.error(err);
});
testAccomadation1.save(function (err) {
  if (err) return console.error(err);
});
testActivity.save(function (err) {
  if (err) return console.error(err);
});
testActivity1.save(function (err) {
  if (err) return console.error(err);
});
testTransportation.save(function (err) {
  if (err) return console.error(err);
});
testTransportation1.save(function (err) {
  if (err) return console.error(err);
});
testTrip.save(function (err) {
  if (err) return console.error(err);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/createtrip", (req, res) => {
  console.log(req.body);
  const newTrip = {
    tripID: req.body.tripID,
    Name: req.body.tripName,
    Transportation: req.body.tripTransport,
    Accomadations: req.body,
  };
});

app.use(passport.initialize());

//require("./config/passport")(passport);

//app.use("/api/users", users);

app.post("/register", (req, res) => { });

app.listen(3000, () => console.log("started"));
