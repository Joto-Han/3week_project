const registerService = require("../services/register_shop.service");

class RegisterController {
  regiService = new registerService();

  createRegister = async (req, res, next) => {
    const { shop_name, password, shop_number, address } = req.body;

    const createRegiData = await this.regiService.createuser(
      shop_name,
      password,
      shop_number,
      address
    );
    res.status(201).json({ data: createRegiData });
  };

  editUser = async (req, res, next) => {
    const { shop_name, password, shop_number, address } = req.body;

    const editUserData = await this.regiService.edituser(
      shop_name,
      password,
      shop_number,
      address
    );
    res.status(222).json({ data: editUserData });
  };
}

module.exports = RegisterController;
