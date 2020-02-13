const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: String,
  exercise: [{
    type: { type: String },
    name: { type: String },
    distance: { type: Number },
    weight: { type: Number },
    sets: { type: Number },
    reps: { type: Number },
    duration: { type: Number },
  }]
});

const Note = mongoose.model("Workout", WorkoutSchema);

module.exports = Note;
