const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Routes
const FileRoute = require("./routes/file");

// MongoDB Connection Setup
mongoose.connect("mongodb://0.0.0.0:27017/testdb");
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("MongoDB Connection Established!");
});

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.use("/api/file", FileRoute);
app.use("/", (req, res, next) => {
  res.json({
    message: "Bhootify API Server",
  });
});
