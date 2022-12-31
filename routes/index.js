const express = require("express");
const router = express.Router();

const regiRouter = require("./register.routes");
const ownerWashRouter = require("./owner_wash.routes");
const washList = require('./washList.routes');
router.use("/", regiRouter, ownerWashRouter, washList);

module.exports = router;
