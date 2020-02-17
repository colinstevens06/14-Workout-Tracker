// const router = require("express").Router();
const router = require("express").Router();
const db = require("../models")
// need to map out CRUD actions

// CREATE/post
router.post("/api/workouts", ({ body }, res) => {
  console.log(body)
})

// READ/get
router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then(dbCardio => {
    res.json(dbCardio)
  }).catch(err => {
    res.json(err)
  })
})

// UPDATE/PUT


// DELETE/REMOVE



module.exports = router