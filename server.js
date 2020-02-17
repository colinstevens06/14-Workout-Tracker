const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")

// setting our port for Heroku and local
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

// connect to the database
mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/workout", { useNewUrlParser: true })

// app.use(require("./seeders/seed"))

// importing my routes
// const router = require("express").Router();
const db = require("./models")

// need to map out CRUD actions

// CREATE/post
app.post("/api/workouts", ({ body }, res) => {
  console.log(body)
})

// READ/get
app.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then(dbCardio => {
    res.json(dbCardio)
  }).catch(err => {
    res.json(err)
  })
})
// server is listening
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});