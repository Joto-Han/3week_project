const logiService = require('../services/login.service');

class LoginController {
  logService = new logiService();

  getlogin = async (req, res, next) => {
    const { nickname, password } = req.body;

    if(!nickname || !password) {
      res.status(400).json({errorMessage: "닉네임과 비밀번호를 입력해주세요."})
    }

    const loginData = await this.logService.userlogin(nickname, password);
    console.log("로그인 컨트롤러")
    res.status(201).json({ data: loginData });
    return
  }
}

module.exports = LoginController;