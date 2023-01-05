const WashListRepository = require('../repositories/washList.repository');

class WashListService {
  washListRepository = new WashListRepository();

  findWashAll = async () => {

    try {
      const washListData = await this.washListRepository.findWashAll();
      
      return washListData.map((data) => {
        return {
          status: data.status,
          extra: data.extra,
          image: data.image,
          wash_id
        };
      });
      
    } catch (error) {
      throw error
    };
  };
};

module.exports = WashListService;