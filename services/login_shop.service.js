const loginRepository = require("../repositories/login_shop.repository");
const jwt = require("jsonwebtoken");

class loginService {
  loginRepository = new loginRepository();

  finduser = async (shop_name, password) => {
    const finduser = await this.loginRepository.finduser(shop_name, password);

    const findShopWash = await this.loginRepository.findShopWash(
      finduser.shop_id
    );
    // console.log(
    //   "wash_id_findShopWash = ✨✨✨",
    //   findShopWash.wash_lists[0].wash_id
    // );
    if (findShopWash === null) {
      return { shop_id: finduser.shop_id };
    } else {
      return {
        shop_id: finduser.shop_id,
        wash_id: findShopWash.wash_lists[0].wash_id,
      };
    }
  };

  findtoken = async (shop_id) => {
    const token = jwt.sign(shop_id, "customized-secret-key", {
      expiresIn: "15m",
    });
    return { token: token };
  };
}

module.exports = loginService;
