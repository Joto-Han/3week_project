const WashAddService = require("../services/wash_add.services");

class WashAddController {
  washAddService = new WashAddService();
  washAdd = async (req, res, next) => {
    const { user_id } = res.locals.user;
    const { extra } = req.body;

    const imgPath = req.file.path;
    const image = imgPath.split("\\")[3];

    const washAddData = await this.washAddService.washAdd(
      user_id,
      image,
      extra
    );
    res.status(201).json({ data: washAddData });
  };
}

module.exports = WashAddController;
