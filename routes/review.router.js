const express = require("express");
const router = express.Router();

const ReviewController = require('../controllers/review.controller');
const reviewController = new ReviewController();

router.get('/shopReview', reviewController.reviewList);

module.exports = router;