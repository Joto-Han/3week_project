const loginRepository = require("../repositories/login.repository");
const jwt = require("jsonwebtoken");

class loginService {
  loginRepository = new loginRepository();

  finduser = async (nickname, password) => {
    console.log("로그인 서비스단계에서의 닉네임", nickname);
    console.log("로그인 서비스단계에서의 패스워드", password);
    const finduser = await this.loginRepository.finduser(nickname, password);
    // console.log("✨✨✨✨✨✨", finduser.user_id);

    return { user_id: finduser.user_id };
  };

  findtoken = async (user_id) => {
    const token = jwt.sign(user_id, "customized-secret-key", {
      expiresIn: "15m",
    });
    return { token: token };
  };
}

module.exports = loginService;
