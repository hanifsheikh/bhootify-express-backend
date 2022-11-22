const express = require("express");
const router = express.Router();

const FileController = require("../controllers/FileController");

router.get("/", FileController.index);
router.post("/store", FileController.store);

module.exports = router;
