const WashListRepository = require("../repositories/washList.repository");

class WashListService {
  washListRepository = new WashListRepository();

  findWashAll = async () => {
    try {
      console.log("π₯π₯π₯ 2 π₯π₯π₯");
      const washListData = await this.washListRepository.findWashAll();
      console.log("π₯π₯π₯ 2-1 π₯π₯π₯");

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
    if (status !== "0") throw new Error("μ΄λ―Έ μ§νμ€μΈ μΈνμλλ€.");

    console.log("μλΉμ€ shop_status = ", shop_status);
    status = 1;
    const statusUpdate = await this.washListRepository.statusUpdate(
      shop_id,
      wash_id,
      status
    );

    shop_status = 1;
    console.log("μλΉμ€-1 shop_status = ", shop_status);
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
