var path = require("path");

module.exports = function(app, path) {
  // send default page to all routes that are undefined
  app.get("/exercise?", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  //index route loads index.html
  app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "../public/index.html"));
  });

  //stats route loads stats.html
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
