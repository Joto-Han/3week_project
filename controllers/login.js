const loginService = require("../services/login.service");

class loginController {
  logService = new loginService();

  getlogin = async (req, res, next) => {
    const { nickname, password } = req.body;
    if (!nickname || !password) {
      return res
        .status(400)
        .json({ errorMessage: "닉네임과 비밀번호를 입력해주세요." });
    }

    try {
      const loginData = await this.logService.finduser(nickname, password);
      const { token } = await this.logService.findtoken(loginData);

      res.cookie("token", token);
      res.status(201).json({ token: token });
      next;
      return;
    } catch (err) {
      return res.status(445).json({ errorMessage: " 로그인 실패 에러!!" });
    }
  };
}

module.exports = loginController;
