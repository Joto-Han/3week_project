const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { user } = require('../models');
const jwt = require('jsonwebtoken');
const authmiddleware = require('../middleware/auth-middleware');

console.log("인덱스");
const regiRouter = require('./register.routes');
const loginRouter = require('./login.routes');
const testRouter = require('./test.routes');
const regiShopRouter = require('./register_shop.routes');
router.use('/api', regiRouter,loginRouter,testRouter,regiShopRouter);

module.exports = router;
