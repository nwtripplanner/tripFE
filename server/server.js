const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
const bcrypt = require("bcryptjs");
=======
const bcrypt = require("bcrypt");
>>>>>>> 6765f64deb6019a60e29b8f62726649058faf96e
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
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

app.post("/create/trip", (req, res) => {
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
  });
  newTrip.save(function (err) {
    if (err) return handleError(err);
    res.send(newTrip);
  });
});


app.post("/create/transportation", (req, res) => {
  console.log(req.body);
  const newTransportation = new transportation({
    time: req.body.time,
    mode: req.body.mode,
    start: req.body.start,
    destination: req.body.destination,
    cost: req.body.cost
  });
  newTransportation.save(function (err) {
    if (err) return handleError(err);
    res.send(newTransportation);
  });
});

// Returns the activity with the given information for the trip with the given name
app.get("/tripID/:tripName/activityID/:activityName", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      activ = selectedTrip.activities;
      for (n = 0; n < activ.length; n++) {
        selectedActiv = activ[n];
        if (selectedActiv.name == req.params.activityName) {
          res.send(selectedActiv);
        }
      }
      res.send("This activity doesn't exist!");
    }).catch((e) => {
      res.status(400).send(e);
    });
});


// Returns the accommodation with the given information for the trip with the given name
app.get("/tripID/:tripName/accommodationID/:accommodationName", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      accomm = selectedTrip.accommodations;
      for (m = 0; m < accomm.length; m++) {
        selectedAccomm = accomm[m];
        if (selectedAccomm.name == req.params.accommodationName) {
          res.send(selectedAccomm);
        }
      }
      res.send("This accommodation doesn't exist!");
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns the transportation with the given information for the trip with the given name
app.get("/tripID/:tripName/transportationID/:transportationMode-:transportationStart-:transportationEnd", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      transpo = selectedTrip.transportations;
      for (l = 0; l < transpo.length; l++) {
        selectedTranspo = transpo[l];
        if (selectedTranspo.mode == req.params.transportationMode &&
          selectedTranspo.start == req.params.transportationStart &&
          selectedTranspo.destination == req.params.transportationEnd) {
          res.send(selectedTranspo);
        }
      }
      res.send("This transportation doesn't exist!");
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns all the transportations for the trip with the given name
app.get("/tripID/:tripName/transportations/", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      res.send(selectedTrip.transportations);
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns all the accommodations for the trip with the given name
app.get("/tripID/:tripName/accommodations/", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      res.send(selectedTrip.accommodations);
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns all the activities for the trip with the given name
app.get("/tripID/:tripName/activities/", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      res.send(selectedTrip.activities);
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns the cost of the activity with the given information for the trip with the given name
app.get("/cost/tripID/:tripName/activityID/:activityName", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      activ = selectedTrip.activities;
      for (n = 0; n < activ.length; n++) {
        selectedActiv = activ[n];
        if (selectedActiv.name == req.params.activityName) {
          res.send(tripPartCost(selectedActiv).toString());
        }
      }
      res.send("This activity doesn't exist!");
    }).catch((e) => {
      res.status(400).send(e);
    });
});


// Returns the cost of the accommodation with the given information for the trip with the given name
app.get("/cost/tripID/:tripName/accommodationID/:accommodationName", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      accomm = selectedTrip.accommodations;
      for (m = 0; m < accomm.length; m++) {
        selectedAccomm = accomm[m];
        if (selectedAccomm.name == req.params.accommodationName) {
          res.send(tripPartCost(selectedAccomm).toString());
        }
      }
      res.send("This accommodation doesn't exist!");
    }).catch((e) => {
      res.status(400).send(e);
    });
});

// Returns the cost of the transportation with the given information for the trip with the given name
app.get("/cost/tripID/:tripName/transportationID/:transportationMode-:transportationStart-:transportationEnd", (req, res) => {
  trip.findOne({name : req.params.tripName})
    .then(selectedTrip => {
      if (!selectedTrip) {
        res.status(404).send();
      }
      transpo = selectedTrip.transportations;
      for (l = 0; l < transpo.length; l++) {
        selectedTranspo = transpo[l];
        if (selectedTranspo.mode == req.params.transportationMode &&
          selectedTranspo.start == req.params.transportationStart &&
          selectedTranspo.destination == req.params.transportationEnd) {
          res.send(tripPartCost(selectedTranspo).toString());
        }
      }
      res.send("This transportation doesn't exist!");
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

require("./config/passport")(passport);

app.use("/api/users", users);

app.post("/register", (req, res) => { });

app.listen(5000, () => console.log("started"));
