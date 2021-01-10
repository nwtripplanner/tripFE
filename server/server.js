const express = require("express");
const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const passport = require("passport");
//const users = require("./routes/api/users");
const activity = require("./models/Activity");
const transportation = require("./models/Transportation");
const accommodation = require("./models/Accommodation");
const trip = require("./models/Trip")

const app = express();
const db = require('./db')

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', function () {
  console.log("Connected!");
});


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

const testAccommodation = new accommodation({
  time: new Date,
  name: "Fairmont Hotel",
  location: "Downtown Vancouver",
  type: "Hotel",
  cost: 500
});
const testAccommodation1 = new accommodation({
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
  name : "Test Trip",
  startDay: new Date,
  endDay: new Date,
  startLoc: "Downtown Vancouver",
  endLoc: "Grouse Mountain",
  savings: 700,
  transportations: [testTransportation, testTransportation1],
  accommodations: [testAccommodation, testAccommodation1],
  activities: [testActivity, testActivity1]
});

// testAccommodation.save(function (err) {
//   if (err) return console.error(err);
// });
// testAccommodation1.save(function (err) {
//   if (err) return console.error(err);
// });
// testActivity.save(function (err) {
//   if (err) return console.error(err);
// });
// testActivity1.save(function (err) {
//   if (err) return console.error(err);
// });
// testTransportation.save(function (err) {
//   if (err) return console.error(err);
// });
// testTransportation1.save(function (err) {
//   if (err) return console.error(err);
// });
// testTrip.save(function (err) {
//   if (err) return console.error(err);
// });

app.get("/", (req, res) => {
  trip.find({})
  .then(allTrips => {
    if (!allTrips) {
      res.status(404).send();
    }
    res.send(allTrips);
  }).catch ((e) => {
    res.status(400).send(e);
  })
});

app.post("/createtrip", (req, res) => {
  console.log(req.body);
  const newTrip = new trip({
    name: req.body.name,
    startDay: req.body.startDay,
    endDay: req.body.endDay,
    startLoc: req.body.startLoc,
    endLoc: req.body.endLoc,
    savings: req.body.savings,
    transportations: req.body.transportations,
    accommodations: req.body.accommodations,
    activities: req.body.activities,
  })
});

app.get("/cost/transportation/:transportationMode-:transportationStart-:transportationEnd/tripid/:tripName", (req, res) => {
  trip.find({ name: req.params.tripName })
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      transpoArray = selectedTrip.transportations;
      selectTranspo = transpoArray.find({mode: req.params.transportationMode, start: req.params.transportationStart, destination: req.params.transportationEnd})
      res.send("hello");
    }).catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/cost/transportation/tripid/:tripName", (req, res) => {
  trip.findOne({ name: req.params.tripName })
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      transpoArray = selectedTrip.transportations;
      total = 0;
      for (i = 0; i < transpoArray.length; i++) {
        total += transpoArray[i].cost;
      }
      res.send(total.toString());
    }).catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/cost/accommodation/:name", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(accommodation => {
      if (!accommodation) {
        res.status(404).send();
      }
      accomArray = accommodation[0].accommodations;
      total = 0;
      for (i = 0; i < accomArray.length; i++) {
        total += accomArray[i].cost;
      }
      res.send(total.toString());
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns the cost of all the transportations for the trip with the given name
app.get("/cost/tripID/:tripName/transportations/", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      res.send(tripPartsCost(selectedTrip.transportations).toString());
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns the cost of all the accommodations for the trip with the given name
app.get("/cost/tripID/:tripName/accommodations/", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      res.send(tripPartsCost(selectedTrip.accommodations).toString());
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns the cost of all the activities for the trip with the given name
app.get("/cost/tripID/:tripName/activities/", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      res.send(tripPartsCost(selectedTrip.activities).toString());
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns the cost of the trip with the given trip name
app.get("/cost/tripID/:tripName", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      res.send(tripCost(selectedTrip).toString());
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns the cost of all the trips
app.get("/cost/trips", (req, res) => {
  trip.find({})
    .then(allTrips => {
      if (!allTrips) {
        res.status(404).send();
      }
      res.send(tripsCost(allTrips).toString());
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns the trip with the given trip name
app.get("/tripID/:tripName", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      res.send(selectedTrip);
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns all trips
app.get("/trips", (req, res) => {
  trip.find({})
    .then(allTrips => {
      if (!allTrips) {
        res.status(404).send();
      }
      res.send(allTrips);
    }).catch((e) => {
      res.status(400).send(e);
    });
});

function tripsCost(trips) {
  tripsTotal = 0;
  for (j = 0; j < trips.length; j++) {
    tripsTotal += tripCost(trips[j]);
  }
  return tripsTotal;
}

function tripCost(trip) {
  return tripPartsCost(trip.transportations) + tripPartsCost(trip.accommodations) + tripPartsCost(trip.activities);
}

function tripPartsCost(tripParts) {
  tripPartsTotal = 0;
  for (i = 0; i < tripParts.length; i++) {
    tripPartsTotal += tripPartCost(tripParts[i]);
  }
  return tripPartsTotal;
}

function tripPartCost(tripPart) {
 return tripPart.cost;
}


app.use(passport.initialize());

//require("./config/passport")(passport);

//app.use("/api/users", users);

app.post("/register", (req, res) => { });

app.listen(5000, () => console.log("started"));
