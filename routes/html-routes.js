// *********************************************************************************
// Offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Main page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });

  // Individual exercise
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/exercise.html"));
  });

  // Workout stats page
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/stats.html"));
  });

};
