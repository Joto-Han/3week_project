const { review } = require('../models');

class ReviewRepository {
  reviewList = async (shop_name) => {
    const shopReview = await review.findAll({
      where: { shop_name: shop_name },
    });

    return shopReview
  };
};

module.exports = ReviewRepository;