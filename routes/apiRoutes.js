const db = require("../models");
const express = require("express");
// const router = express.Router();
console.log("hello");
// GET

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    console.log("Inside get route");
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.get("/api/workouts/range", (req, res) => {
    console.log("populate get");
    db.Workout.find({})
      .populate("exercises")
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.post("/api/workouts", (req, res) => {
    console.log("create");
    db.Workout.create({ name: "exercises" })
      .then(dbworkout => {
        res.json(dbworkout);
        console.log(dbworkout);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Exercise.create((name: "day"))
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
