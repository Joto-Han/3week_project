const loginRepository = require("../repositories/login.repository");
const jwt = require("jsonwebtoken");

class loginService {
  loginRepository = new loginRepository();

  finduser = async (nickname, password) => {
    const finduser = await this.loginRepository.finduser(nickname, password);
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
