const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/auth-middleware");

const UserMyReviewController = require('../controllers/user_review.controller');
const userMyReviewController = new UserMyReviewController();

router.get('/my_review',authmiddleware ,userMyReviewController.reviewList);

module.exports = router;