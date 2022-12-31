const express = require("express");
const router = express.Router();

const OwnerWashController = require("../controllers/owner_wash.controller");
const ownerWashController = new OwnerWashController();

router.get("/wash_list/:wash_id", ownerWashController.getOwnerWashById);

module.exports = router;