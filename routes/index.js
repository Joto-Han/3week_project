const express = require('express');
const router = express.Router();

const regiRouter = require('./register.routes');
router.use('/', regiRouter);

module.exports = router;