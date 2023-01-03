const WashListService = require('../services/washListService');

class WashListController {
  washListService = new WashListService();

  washListAll = async (req, res, next) => {
    const washList = await this.washListService.findAllWashList();
    console.log(washList)
    res.status(201).json({ data: washList });
  };
};

module.exports = WashListController;