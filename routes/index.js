const express = require("express");
const router = express.Router();

const regiRouter = require("./register.routes");
const ownerWashRouter = require("./owner_wash.routes");
router.use("/", regiRouter, ownerWashRouter);

module.exports = router;
