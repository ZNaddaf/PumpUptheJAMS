// *********************************************************************************
// api routes
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var workoutCollection = require("../models/exercise")

// Routes
// =============================================================
module.exports = function (app) {

  // Add a new Workout
  app.post("/api/workouts", function (req, res) {
    console.log("workouts route: ", req.body)
    workoutCollection.create(req.body).then((newWorkout) => {
      console.log("Adding new workout: ", newWorkout)
    })
  });

  // Get Last Workout
  app.get("/api/workouts", function (req, res) {
    console.log("workouts route: ", req.body)
    workoutCollection.find().then((newWorkout) => {
      console.log("Finding a workout: ", newWorkout)
      res.json(newWorkout)
    })
  });
};
