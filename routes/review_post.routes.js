const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/auth-middleware")

const ReviewPostController = require("../controllers/review_post.controller");
const reviewPostController = new ReviewPostController();

router.post("/review/:shop_name", authmiddleware, reviewPostController.reviewPost);

module.exports = router;
