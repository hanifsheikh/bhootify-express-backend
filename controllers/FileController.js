const File = require("../models/File");

// List/Index Files
const index = (req, res, next) => {
  File.find()
    .sort("-createdAt")
    .exec((err, files) => {
      res.json(files);
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

// Update a file

const update = (req, res, next) => {
  let fileID = req.body.fileID;
  let updatedData = {
    thumbnailURL: req.body.thumbnailURL,
    fileURL: req.body.fileURL,
    author: req.body.author,
    title: req.body.title,
    duration: req.body.duration,
  };

  File.findByIdAndUpdate(fileID, { $set: updatedData })
    .then(() => {
      res.json({
        message: " Information updated!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

const destroy = (req, res, next) => {
  let fileID = req.body.fileID;
  File.findByIdAndDelete(fileID)
    .then(() => {
      res.json({
        message: "File Removed form DB : " + fileID,
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
  update,
  destroy,
};
