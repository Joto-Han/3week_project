const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { user } = require('../models');
const jwt = require('jsonwebtoken');
const authmiddleware = require('../middleware/auth-middleware');

console.log("인덱스");
const regiRouter = require('./register.routes');
const loginRouter = require('./login.routes');
router.use('/api', regiRouter,loginRouter);

module.exports = router;
