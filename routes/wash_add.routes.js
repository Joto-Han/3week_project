const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/auth-middleware");

const WashAddController = require("../controllers/wash_add.controller");
const washAddController = new WashAddController();
const { upload } = require("../multer");

router.post(
  "/wash_add",
  upload.single("file"),
  authmiddleware,
  washAddController.washAdd
);

module.exports = router;
