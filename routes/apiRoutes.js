var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/charter", function(req, res) {
    // var info = req.body;
    db.Charter.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      location: req.body.location,
      date: req.body.date,
      adults: req.body.adults,
      children: req.body.children
    }).then(function(charterData) {
      // make a query string with the charterData
      // pass query string to redirect
      res.redirect("/confirmation");
      
    });
  });

  app.post("/api/trip", function(req, res) {
    // var info = req.body;
    db.Trip.create({
      tripLocation: req.body.tripLocation,
      tripDate: req.body.tripDate,
      description: req.body.description,
      boat: req.body.boat,
      numPeople: req.body.numPeople,
      tripCost: req.body.tripCost,
      image: req.body.image,
    }).then(function(tripData) {
      
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
