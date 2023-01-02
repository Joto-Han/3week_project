const WashListService = require('../services/washListService');

class WashListController {
  washListService = new WashListService();

  findWashAll = async (req, res, next) => {
    const washList = await this.washListService.findWashAll();
    
    res.status(201).json({ data: washList });
  };
};

module.exports = WashListController;