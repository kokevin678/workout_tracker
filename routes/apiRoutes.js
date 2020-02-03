const Workout = require("../models/workout.js");

module.export = function(app) {
  app.get("/api/workouts", function(req, res) {
    Workout.findAll({})
      .then(function(result) {
        res.json(result);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  app.post("/api/workouts", function(req, res) {
    Workout.create({})
      .then(function(result) {
        res.json(result);
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  //   app.put("/api/workouts/:id", function({req}, res) {
  //     Workout.create({})
  //       .then(function(result) {
  //         res.json(result);
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   });
};

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
