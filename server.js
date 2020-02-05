// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

// Routes
require("./routes/htmlRoutes")(app, path);
require("./routes/apiRoutes");

app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set static root directory
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

db.Workout.create({ name: "exercises" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    console.log(message);
  });

// app.post("/submit", function(req, res) {
//   Workout.create({})
//     .then(function(result) {
//       res.json(result);
//       console.log(result);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
