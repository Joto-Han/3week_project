const express = require("express");
const router = express.Router();

const logiController = require("../controllers/login");
const loginController = new logiController();

router.post("/auth", loginController.getlogin);

module.exports = router;
