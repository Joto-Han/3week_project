const express = require('express');
const router = express.Router();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const { Op } = require("sequelize");
const { User } = require("../models");

const logiController = require('../controllers/login');
const loginController = new logiController();
router.post('/auth', loginController.getlogin);

module.exports = router;