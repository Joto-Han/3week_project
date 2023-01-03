const express = require("express");
const router = express.Router();

const UserViewController = require("../controllers/user_view.controller");
const userViewController = new UserViewController();

router.get("/wash_list/:user_id", userViewController.getUserViewById);

module.exports = router;
