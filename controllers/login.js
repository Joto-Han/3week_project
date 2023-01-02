const loginService = require('../services/login.service');
const authmiddleware = require("../middleware/auth-middleware")

class loginController {
  logService = new loginService();

  getlogin = async (req, res, next) => {
    const { nickname, password } = req.body;

    if(!nickname || !password) {
      res.status(400).json({errorMessage: "닉네임과 비밀번호를 입력해주세요."})
    }
    try {
      const loginData = await this.logService.finduser(nickname, password)
      const {token} = await this.logService.findtoken(loginData)
      console.log("1:", loginData);
      console.log("2:", token);

      res.cookie("token", token);
      res.status(201).json({token: token})
      next

    } catch(err) {
      res.status(445).json({errorMessage: " 로그인 실패 에러!!"})
    }

    // const loginData = await this.logService.userlogin(nickname, password);
    // console.log("로그인 컨톨러의 토큰:", loginData);
    // res.cookie("token", loginData);
    // res.status(201).json({ token: loginData });
    // // return
  }
}

module.exports = loginController;