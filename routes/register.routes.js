const express = require('express');
const router = express.Router();

const regiController = require('../controllers/register');
const registerController = new regiController();

// router.get('/', registerController.getPosts); // 겟 메소드를 통해 레지스트컨트롤러의 겟포스트를 실행할거다 물론 중간에 미들웨어를 넣어도 됨
router.post('/', registerController.createRegister); // 포스트 메소드를 통해 기본 url을 실행하였을때 포스트컨트롤러의 크리에이트포스트를 실행할거다

module.exports = router;