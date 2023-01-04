const { wash_list } = require('../models');

class WashListRepository {
  findWashAll = async () => {

    try {
      const washList = await wash_list.findAll();
  
      return washList;
      
    } catch (error) {
      throw error
    };
  };
};

module.exports = WashListRepository;