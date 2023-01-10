const OwnerWashService = require("../services/owner_wash_servive");
class OwnerWashController {
  ownerWashService = new OwnerWashService();

  getOwnerWashById = async (req, res, next) => {
    try {
      const { shop_id } = res.locals.user;
      const { wash_id } = req.params;
      const ownerWash = await this.ownerWashService.findOwnerWashById(
        wash_id,
        shop_id
      );
      if (!wash_id || !ownerWash) throw new Error("InvalidParamsError");

      res.status(200).json({ data: ownerWash });
      // res.render("shop_wash_status.ejs", { data: ownerWash });
    } catch (error) {
      res.status(400).json({ errorMessage: "shop_id가 다릅니다." });
    }
  };

  statusUpdate = async (req, res, next) => {
    try {
      const { wash_id } = req.params;

      if (!wash_id) throw new Error("InvalidParamsError");

      const statusUpdate = await this.ownerWashService.statusUpdate(wash_id);

      res.status(200).json({ data: statusUpdate });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };
}

module.exports = OwnerWashController;
