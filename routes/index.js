const express = require("express");
const router = express.Router();

const regiRouter = require("./register.routes");
const userViewRouter = require("./user_view.routes");
const reviewPostRouter = require("./review_post.routes");
const washAddRouter = require("./wash_add.routes");
router.use("/", regiRouter, userViewRouter, reviewPostRouter, washAddRouter);

module.exports = router;
