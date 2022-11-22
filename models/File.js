const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema(
  {
    thumbnailURL: {
      type: String,
    },
    fileURL: {
      type: String,
    },
    author: {
      type: String,
    },
    title: {
      type: String,
    },
    duration: {
      type: String,
    },
  },
  { timestamps: true }
);
const File = mongoose.model("File", fileSchema);

module.exports = File;
