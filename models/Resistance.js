const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  nameInput: {
    type: String,
    trim: true,
    required: "Name is required."
  },
  weightInput: {
    type: Number,
    trim: true,
    required: "Weight is required."
  },
  setsInput: {
    type: Number,
    trim: true,
    required: "How many sets did you do?"
  },
  repsInput: {
    type: Number,
    trim: true,
    required: "Number of reps is required."
  },
  durationInput: {
    type: Number,
    trim: true,
    required: "Duration of exercise is required."
  }
})

const Resistance = mongoose.model("Resistance", ResistanceSchema)

module.exports = Resistance;