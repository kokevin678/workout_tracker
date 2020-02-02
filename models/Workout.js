const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise: [
    {
      type: Schema.Types,
      ObjectId,
      trim: true,
      ref: "exercise"
    },
    {name: {
      type: String
    }),
    (duration: {
      type: Number
    }),
    (weight: {
      type: Number
    }),
    (reps: {
      type: Number
    }),
    (sets: {
      type: Number
    }),
    (distant: {
      type: Number
    })
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
