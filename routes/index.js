const express = require("express");
const router = express.Router();

const regiRouter = require("./register.routes");
const ownerWashRouter = require("./owner_wash.routes");
const washListRouter = require('./washList.routes');
const reviewRouter = require('./review.router')
router.use("/", regiRouter, ownerWashRouter, washListRouter, reviewRouter);

module.exports = router;
