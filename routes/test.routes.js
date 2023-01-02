const express = require("express");
const jwt = require("jsonwebtoken");

const authmiddleware = require("../middleware/auth-middleware");

const app = express();
const router = express.Router();

router.post("/test", authmiddleware, async(req,res) => {
    console.log("하이");
    res.status(333).json({})
    return
})

module.exports = router;