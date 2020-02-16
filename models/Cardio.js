const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  nameInput: {
    type: String,
    trim: true,
    required: "Give your workout a name."
  },
  durationInput: {
    type: Number,
    trim: true,
    required: "Duration of exercise is required."
  },
  distanceInput: {
    type: Number,
    trim: true,
    required: "Distance is required."
  }
})

const Cardio = mongoose.model("Cardio", CardioSchema)

module.exports = Cardio