const db = require("../models");
console.log("hello");

module.exports = function(app) {
  // GET Route
  app.get("/api/workouts", (req, res) => {
    console.log("GET ROUTE", res);
    db.Workout.find({})
      .populate("exercises")
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

  // PUT Route
  app.put("/api/workouts/:id", (req, res) => {
    db.Exercise.create(req.body)
      .then(data =>
        db.Workout.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: {
              exercises: data._id
            },
            $inc: {
              totalDuration: data.duration
            }
          },
          { new: true }
        )
      )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //POST Route
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({ day: Date.now() })
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
