const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")

// setting our port for Heroku and local
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.statis("public"))

// connect to the database
mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/populate", { useNewUrlParser: true })

// importing my routes



// server is listening
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});