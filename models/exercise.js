const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: String,
  exercise: [{
    type: String,
    name: String,
    distance: Number,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
  }]
});

const Note = mongoose.model("Workout", WorkoutSchema);

module.exports = Note;
