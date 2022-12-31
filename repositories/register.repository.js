const { user } = require('../models');

class RegiRepository {

  createuser = async (nickname, password, phone_number, address,user_type) => {

    const existsUsers = await user.findAll({
      where: { nickname: nickname },
    });

    if (existsUsers.length) {
      console.log("이미 존재하는 닉네임입니다.")
      return existsUsers
    }

    if(user_type === '0') {
      const createRegiData = await user.create({ nickname, password, phone_number, address,user_type,point: 1000000 });
      console.log("레지스터 레퍼지토리 - 저장 성공 : 회원")
      return createRegiData;
    } else if (user_type === '1') {
      const createRegiData = await user.create({ nickname, password, phone_number, address,user_type,point: 0 });
      console.log("레지스터 레퍼지토리 - 저장 성공 : 사업자")
      return createRegiData;
    }
  }
}

module.exports = RegiRepository;