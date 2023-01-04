const WashListService = require('../services/washListService');

class WashListController {
  washListService = new WashListService();

  findWashAll = async (req, res, next) => {
    try {
      const washList = await this.washListService.findWashAll();
      
      res.status(201).json({ data: washList });
    } catch (error) {
      res.status(400).json({errorMessege: error.message})
    }
  };
};

module.exports = WashListController;