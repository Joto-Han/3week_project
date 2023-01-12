const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/auth-middleware");

const ReviewEditController = require("../controllers/my_review_edit.controller");
const reviewEditController = new ReviewEditController();
const { upload } = require("../multer");

router.get(
  "/my_review_edit/:review_id",
  authmiddleware,
  reviewEditController.reviewData
);

router.put(
  "/review_write",
  upload.single("file"),
  authmiddleware,
  reviewEditController.reviewEdit
);

module.exports = router;
