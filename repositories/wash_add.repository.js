const { user, wash_list } = require("../models");

class WashAddRepository {
  washAdd = async (user_id, image, extra) => {
    const washAddData = await wash_list.create({
      user_id,
      image,
      extra,
    });
    return washAddData;
  };
}

module.exports = WashAddRepository;
