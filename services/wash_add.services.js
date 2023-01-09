const WashAddRepository = require("../repositories/wash_add.repository");
const { wash } = require("../models");

class WashAddService {
  WashAddRepository = new WashAddRepository(wash);
  washAdd = async (user_id, image, extra) => {
    const washData = await this.WashAddRepository.washAdd(
      user_id,
      image,
      extra
    );
    return {
      image,
      extra,
    };
  };
}

module.exports = WashAddService;
