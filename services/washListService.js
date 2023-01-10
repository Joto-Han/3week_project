const WashListRepository = require("../repositories/washList.repository");

class WashListService {
  washListRepository = new WashListRepository();

  findWashAll = async () => {
    try {
      const washListData = await this.washListRepository.findWashAll();

      return washListData.map((data) => {
        return {
          wash_id: data.wash_id,
          status: data.status,
          extra: data.extra,
          image: data.image,
        };
      });
    } catch (error) {
      throw error;
    }
  };

  statusUpdate = async (shop_id, shop_status, wash_id, status) => {
    if (status !== "0") throw new Error("이미 진행중인 세탁입니다.");

    status = 1;
    const statusUpdate = await this.washListRepository.statusUpdate(
      shop_id,
      wash_id,
      status
    );

    shop_status = 1;
    const shopStatusUpdate = await this.washListRepository.shopStatusUpdate(
      shop_id,
      shop_status
    );
    return {
      shop_id: statusUpdate.shop_id,
    };
  };
}

module.exports = WashListService;
