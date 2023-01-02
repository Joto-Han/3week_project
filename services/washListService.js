const WashListRepository = require('../repositories/washList.repository');

class WashListService {
  washListRepository = new WashListRepository();

  findWashAll = async () => {
    const washListData = await this.washListRepository.findWashAll();

    return washListData.map((data) => {
      return {
        status: data.status,
        extra: data.extra,
        image: data.image,
      };
    });
  };
};

module.exports = WashListService;