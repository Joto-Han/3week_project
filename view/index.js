const express = require('express');
const app = express.Router();

app.get('/api/auth', (req,res) => {
    try{
        res.render("auth");
    } catch (err) {
        console.log("에러가 발생하였습니다. 에러 이유 :", err);
    }
})