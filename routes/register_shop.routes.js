const express = require('express');
const router = express.Router();
const shopmiddleware = require("../middleware/auth-middleware_shop");

const regiController = require('../controllers/register_shop');
const registerController = new regiController();
router.post('/register_shop',registerController.createRegister);
router.put('/edit_shop', shopmiddleware, registerController.editUser)

module.exports = router;