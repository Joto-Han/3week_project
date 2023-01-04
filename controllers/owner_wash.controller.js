const OwnerWashService = require("../services/owner_wash_servive");

class OwnerWashController {
  ownerWashService = new OwnerWashService();

  getOwnerWashById = async (req, res, next) => {
    try {
      const { wash_id } = req.params;
      const ownerWash = await this.ownerWashService.findOwnerWashById(wash_id);

      if (!wash_id || !ownerWash) throw new Error("InvalidParamsError");

      res.status(200).json({ data: ownerWash });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };

  statusUpdate = async (req, res, next) => {
    try {
      const { wash_id } = req.params;
      const { status } = req.body;

      if (!wash_id || !status) throw new Error("InvalidParamsError");

      const statusUpdate = await this.ownerWashService.statusUpdate(
        wash_id,
        status
      );

      res.status(200).json({ data: statusUpdate });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };
}

module.exports = OwnerWashController;