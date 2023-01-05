const WashListService = require("../services/washListService");

class WashListController {
  washListService = new WashListService();

  findWashAll = async (req, res, next) => {
    console.log("컨트롤러 단계 1");
    try {
      console.log("🔥🔥🔥 1 🔥🔥🔥");
      const washList = await this.washListService.findWashAll();
      console.log("🔥🔥🔥 1-1 🔥🔥🔥");

      res.status(201).json({ data: washList });
    } catch (error) {
      res.status(400).json({ errorMessege: error.message });
    }
  };

  statusUpdate = async (req, res, next) => {
    try {
      const shop_id = res.locals.user.shop_id;
      const shop_status = res.locals.user.shop_status;
      console.log("controller shop_status = ", typeof shop_status);
      if (shop_status === 1 || shop_status === "1") {
        throw new Error("진행중인 세탁이 있습니다.");
      }
      const { wash_id, status } = req.body;
      // console.log("controller shop_id = ", shop_id);
      const statusUpdate = await this.washListService.statusUpdate(
        shop_id,
        shop_status,
        wash_id,
        status
      );

      res.status(201).json({ message: "세탁물 선택 완료" });
    } catch (error) {
      res.status(400).json({ errorMessege: error.message });
    }
  };
}

module.exports = WashListController;
