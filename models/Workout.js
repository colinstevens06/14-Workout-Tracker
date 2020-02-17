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
  day: Date,
  exercises: [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    duration: Number,
    distance: Number,
  }]
})




const Workout = mongoose.model("Resistance", WorkoutSchema2)

module.exports = Workout;