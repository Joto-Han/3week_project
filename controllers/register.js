const registerService = require('../services/register.service');

// Post의 컨트롤러(Controller)역할을 하는 클래스
class RegisterController {
  regiService = new registerService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  // getPosts = async (req, res, next) => {
  //   // 서비스 계층에 구현된 findAllPost 로직을 실행합니다.
  //   const posts = await this.regiService.findAllPost();

  //   res.status(200).json({ data: posts })
  // }

  createRegister = async (req, res, next) => {
    const { nickname, password, phone_number, address } = req.body;

    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createRegiData = await this.regiService.createuser(nickname, password, phone_number, address);

    res.status(201).json({ data: createRegiData });
  }
}

module.exports = RegisterController;