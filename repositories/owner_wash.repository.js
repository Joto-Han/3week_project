const { wash_list, user } = require("../models");

class OwnerWashRepository {
  findOwnerWashById = async (wash_id) => {
    const ownerWash = await wash_list.findByPk(wash_id);

    return ownerWash;
  };

  findUserWashById = async (wash_id) => {
    const userData = await wash_list.findOne({
      where: { user_id: wash_id },
      include: [
        {
          model: user,
          required: true,
          attributes: ["nickname", "address", "phone_number"],
        },
      ],
    });
    return userData;
  };

  statusUpdate = async (wash_id, status) => {
    const washStatus = await wash_list.update(
      { status },
      { where: { wash_id } }
    );
    return washStatus;
  };
}

module.exports = OwnerWashRepository;
