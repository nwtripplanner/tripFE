const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();
const db = require('./db')

// module.exports = mongoose.model("User", UserSchema);
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

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

require("./config/passport")(passport);

app.use("/api/users", users);

app.post("/register", (req, res) => {});

app.listen(3000, () => console.log("started"));
