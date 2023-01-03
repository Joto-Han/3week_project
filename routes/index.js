const express = require("express");
const router = express.Router();

const regiRouter = require("./register.routes");
const userViewRouter = require("./user_view.routes");
const reviewPostRouter = require("./review_post.routes");
router.use("/", regiRouter, userViewRouter, reviewPostRouter);

module.exports = router;
