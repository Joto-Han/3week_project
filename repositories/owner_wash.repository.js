const { wash_list } = require("../models");

class OwnerWashRepository {
  findOwnerWashById = async (wash_id) => {
    const ownerWash = await wash_list.findByPk(wash_id);

    return ownerWash;
  };

  //   findUserWashById = async (wash_id) => {
  //     const userData = await wash_list.findOne({
  //       where: { user_id: wash_id },
  //       //   raw: true,
  //       //   attributes: ["user.nickname", "user.address", "user.phone_number"],
  //       include: [
  //         {
  //           model: user,
  //           required: true,
  //           attributes: ["nickname", "address", "phone_number"],
  //         },
  //       ],
  //     });
  //     return userData;
  //   };
}

module.exports = OwnerWashRepository;
