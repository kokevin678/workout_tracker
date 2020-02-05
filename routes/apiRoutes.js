const db = require("../models");
const router = require("express").Router();

// GET
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .populate("exercises")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .populate("exercises")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;

// function(exercise) {
//   app.get("/api/workouts", function(req, res) {
//     console.log(res);
//     db.Workouts.find({})
//       .then(function(result) {
//         console.log(result);
//         res.json(result);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   });

// app.post("/api/workouts/:id", function({ body }, res) {
//   Workout.create({ body });
//     .then(function(result) {
//       res.json(result);
//       console.log(result);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

// app.post("/api/workouts", function({ body }, res) {
//   Workout.insert({ body })
//     .then(function(result) {
//       res.json(result);
//       console.log(result);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

// app.put("/api/workouts/:id", function(req, res) {
//   db.Workout.findByIdAndUpdate(params.id)
//     .then(function(result) {
//       res.send(result);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });
// };

// db.User.create({ name: "Ernest Hemingway" })
//   .then(dbUser => {
//     console.log(dbUser);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// app.get("/notes", (req, res) => {
//   db.Note.find({})
//     .then(dbNote => {
//       res.json(dbNote);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/user", (req, res) => {
//   db.User.find({})
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
