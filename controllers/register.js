const registerService = require('../services/register.service');

class RegisterController {
  regiService = new registerService();

  createRegister = async (req, res, next) => {
    const { nickname, password, phone_number, address, user_type } = req.body;

    const createRegiData = await this.regiService.createuser(nickname, password, phone_number, address, user_type);
    console.log("레지스트 컨트롤러")
    res.status(201).json({ data: createRegiData });
  }
}

module.exports = RegisterController;