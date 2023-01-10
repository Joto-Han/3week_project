const UserViewRepository = require("../repositories/user_view.repository");
const { wash_list } = require("../models/wash_list.js");

class UserViewService {
  userViewRepository = new UserViewRepository(wash_list);
  // 유저 화면
  findUserViewById = async (user_id) => {
    const findUserData = await this.userViewRepository.findUserViewById(
      user_id
    );
    const returnData = findUserData.map((data) => {
      return {
        shop_id: data?.dataValues?.shop?.dataValues?.shop_id,
        shop_name: data?.dataValues?.shop?.dataValues?.shop_name, //
        createdAt: data?.createdAt, //
        status: data?.status, //
      };
    });

    return returnData;
  };
}

module.exports = UserViewService;
