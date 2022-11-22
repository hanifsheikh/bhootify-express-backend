const File = require("../models/File");

// List/Index Files
const index = (req, res, next) => {
  File.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

// Store a File

const store = (req, res, next) => {
  let file = new File({
    thumbnailURL: req.body.thumbnailURL,
    fileURL: req.body.fileURL,
    author: req.body.author,
    title: req.body.title,
    duration: req.body.duration,
  });
  file
    .save()
    .then((response) => {
      res.json({
        message: "File has been saved",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

module.exports = {
  index,
  store,
};
