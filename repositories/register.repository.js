const { user } = require('../models');

class RegiRepository {
  // findAllPost = async () => {
  //   // ORM인 Sequelize에서 user 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
  //   const posts = await user.findAll();

  //   return posts;
  // }

  createuser = async (nickname, password, phone_number, address) => {
    // ORM인 Sequelize에서 user 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createRegiData = await user.create({ nickname, password, phone_number, address });

    return createRegiData;
  }
}

module.exports = RegiRepository;