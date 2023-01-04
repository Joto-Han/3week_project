const express = require("express");
const router = express.Router();

const WashAddController = require("../controllers/wash_add.controller");
const washAddController = new WashAddController();

router.post("/wash_add/:user_id", washAddController.washAdd);

module.exports = router;
