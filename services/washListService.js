const WashListRepository = require("../repositories/washList.repository");

class WashListService {
  washListRepository = new WashListRepository();

  findWashAll = async () => {
    try {
      console.log("🔥🔥🔥 2 🔥🔥🔥");
      const washListData = await this.washListRepository.findWashAll();
      console.log("🔥🔥🔥 2-1 🔥🔥🔥");

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
    console.log("service status = ", typeof status);
    if (status !== "0") throw new Error("이미 진행중인 세탁입니다.");

    console.log("서비스 shop_status = ", shop_status);
    status = 1;
    const statusUpdate = await this.washListRepository.statusUpdate(
      shop_id,
      wash_id,
      status
    );

    shop_status = 1;
    console.log("서비스-1 shop_status = ", shop_status);
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
