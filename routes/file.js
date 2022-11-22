const express = require("express");
const router = express.Router();

const FileController = require("../controllers/FileController");

router.get("/", FileController.index);
router.post("/store", FileController.store);
router.post("/update", FileController.update);
router.post("/delete", FileController.destroy);

module.exports = router;
