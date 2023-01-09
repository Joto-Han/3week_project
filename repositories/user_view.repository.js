const { wash_list, shop } = require("../models");

class UserViewRepository {
  // 유저 화면
  findUserViewById = async (user_id) => {
    const userView = await wash_list.findAll({
      where: { user_id: user_id },
      include: { model: shop },
    });

    return userView;
  };
}

module.exports = UserViewRepository;
