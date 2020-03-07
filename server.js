// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

// Set port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set static root directory
app.use(express.static("public"));

// Routes
require("./routes/htmlRoutes.js")(app, path);
require("./routes/apiRoutes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
