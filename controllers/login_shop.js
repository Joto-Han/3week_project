const loginService = require("../services/login_shop.service");
const authmiddleware = require("../middleware/auth-middleware");

class loginController {
  logService = new loginService();

  getlogin = async (req, res, next) => {
    const { shop_name, password } = req.body;

    if (!shop_name || !password) {
      res
        .status(400)
        .json({ errorMessage: "아이디와 비밀번호를 입력해주세요." });
    }
    try {
      const loginData = await this.logService.finduser(shop_name, password);
      const { token } = await this.logService.findtoken(loginData);

      res.cookie("token", token);
      res.status(201).json({ token: token });
      next;
    } catch (err) {
      res.status(445).json({ errorMessa: " 로그인 실패 에러!!" });
    }
  };

  getlogin2 = async (req, res, next) => {
    const { shop_name, password } = res.locals.user;
    try {
      const loginData = await this.logService.finduser(shop_name, password);
      res.json({
        result: "success",
        user: res.locals.user,
        wash_id: loginData.wash_id,
      });
    } catch (err) {
      res.status(445).json({ errorMessa: " 로그인 실패 에러!!" });
    }
  };
}

module.exports = loginController;
