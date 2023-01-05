const { shop, wash_list } = require("../models");

class loginRepository {
  finduser = async (shop_name, password) => {
    const exuser = await shop.findOne({
      where: { shop_name: shop_name },
    });
    return exuser;
  };

  findShopWash = async (shop_id) => {
    const findShopWash = await shop.findOne({
      where: { shop_id },
      include: [
        {
          model: wash_list,
          required: true,
          attributes: ["wash_id"],
        },
      ],
    });
    return findShopWash;
  };
}

module.exports = loginRepository;
