const express = require("express");
const router = express.Router();
const shopmiddleware = require("../middleware/auth-middleware_shop");

const WashListController = require("../controllers/wash_list.controller");
const washListController = new WashListController();

router.get("/wash_list",shopmiddleware, washListController.findWashAll);

module.exports = router;