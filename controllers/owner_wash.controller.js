const OwnerWashService = require("../services/owner_wash_servive");

class OwnerWashController {
  ownerWashService = new OwnerWashService();

  getOwnerWashById = async (req, res, next) => {
    const { wash_id } = req.params;
    const ownerWash = await this.ownerWashService.findOwnerWashById(wash_id);

    res.status(200).json({ data: ownerWash });
  };

  statusUpdate = async (req, res, next) => {
    const { wash_id } = req.params;
    const { status } = req.body;
    console.log("controll status = ", req.body);
    const statusUpdate = await this.ownerWashService.statusUpdate(
      wash_id,
      status
    );

    res.status(200).json({ data: statusUpdate });
  };
}

module.exports = OwnerWashController;
