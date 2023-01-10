const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/auth-middleware");

const ReviewPostController = require("../controllers/review_post.controller");
const reviewPostController = new ReviewPostController();
const { upload } = require("../multer");

router.post(
  "/review_write",
  upload.single("file"),
  authmiddleware,
  reviewPostController.reviewPost
);

module.exports = router;
