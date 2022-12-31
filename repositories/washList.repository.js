const { wash_list } = require('../models');

class WashListRepository {
  findWashAll = async () => {
    const washList = await wash_list.findAll();

    return washList;
  };
};

module.exports = WashListRepository;