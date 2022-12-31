const OwnerWashService = require("../services/owner_wash_servive");

class OwnerWashController {
  ownerWashService = new OwnerWashService();

  getOwnerWashById = async (req, res, next) => {
    const { wash_id } = req.params;
    const ownerWash = await this.ownerWashService.findOwnerWashById(wash_id);

    res.status(200).json({ data: ownerWash });
  };
}

module.exports = OwnerWashController;