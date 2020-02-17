const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      required: "Select Cardio and Resistance",
    },
    name: {
      type: String,
      required: "Please name this exercise."
    },
    distance: { type: Number },
    weight: { type: Number },
    sets: { type: Number },
    reps: { type: Number },
    duration: { type: Number, required: "Completetion time in minutes." },
  }]
});

const Note = mongoose.model("Workout", WorkoutSchema);

module.exports = Note;
