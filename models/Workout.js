const mongoose = require("mongoose")

const Schema = mongoose.Schema;

// const WorkoutSchema = new Schema({
//   nameInput: {
//     type: String,
//     trim: true,
//     required: "Workout must have a name."
//   },
//   type: String,
//   workouts: [{
//     type: Schema.Types.ObjectId,
//     ref: "WorkoutTypes"
//   }]
// })


const WorkoutSchema2 = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: { type: String },
    name: { type: String },
    duration: { type: Number },
    weight: { type: Number },
    reps: { type: Number },
    sets: { type: Number },
    distance: { type: Number },
  }]
})




const Workout = mongoose.model("Resistance", WorkoutSchema2)

module.exports = Workout;