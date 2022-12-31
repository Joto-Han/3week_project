const express = require("express");
const router = express.Router();

const WashListController = require("../controllers/wash_list.controller");
const washListController = new WashListController();

router.get("/wash_list", washListController.washListAll);

module.exports = router;