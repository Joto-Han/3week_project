const registerRepository = require('../repositories/register.repository');

class RegiService {
  regiRepository = new registerRepository();


  createuser = async (nickname, password, phone_number, address, user_type) => {

    const createRegiData = await this.regiRepository.createuser(nickname, password, phone_number, address, user_type);
    console.log("레지스트 서비스")
    return {
      user_id: createRegiData.null,
      nickname: createRegiData.nickname,
      password: createRegiData.password,
      phone_number: createRegiData.phone_number,
      address: createRegiData.address,
      createdAt: createRegiData.createdAt,
      updatedAt: createRegiData.updatedAt,
      user_type: createRegiData.user_type,
    };
  }
}

module.exports = RegiService;