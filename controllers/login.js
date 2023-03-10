const loginService = require("../services/login.service");

class loginController {
  logService = new loginService();

  getlogin = async (req, res, next) => {
    const { nickname, password } = req.body;
    console.log("getlogin 닉네임", nickname);
    console.log("getlogin 패스워드", password);
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

  // getlogin2 = async (req, res, next) => {
  //   const { nickname, password } = res.locals.user;
  //   console.log("getlogin2 닉네임", nickname);
  //   console.log("getlogin2 패스워드", password);
  //   try {
  //     const loginData = await this.logService.finduser(nickname, password);
  //     res.json({
  //       result: "success",
  //       user: res.locals.user,
  //     });
  //   } catch (err) {
  //     return res.status(445).json({ errorMessage: " 로그인 실패 에러!!" });
  //   }
  // };
}

module.exports = loginController;
