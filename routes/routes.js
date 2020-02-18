// getting express routers
const router = require("express").Router();
const mongojs = require("mongojs")

// importing models
const db = require("../models")
const Workout = require("../models/Workout.js");


// need to map out CRUD actions for the database

// CREATE/post
router.post("/api/workouts", ({ body }, res) => {
  console.log("POST SUCCESSFUL")
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

// UPDATE A WORKOUT
router.put("/api/workouts/:id", (req, res) => {
  console.log("POST all data SUCCESSFUL")
  let body = req.body;
  console.log(body)

  Workout.update(
    { _id: mongojs.ObjectId(req.params.id) },
    {
      $push: {
        exercises: {
          type: body.type,
          name: body.name,
          duration: body.duration,
          weight: body.weight,
          reps: body.reps,
          sets: body.sets,
          distance: body.distance
        }

      }
    })
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err)
    })
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