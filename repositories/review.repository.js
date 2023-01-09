const { review, user } = require("../models");

class ReviewRepository {
  reviewList = async (shop_name) => {
    try {
      const shopReview = await review.findAll({
        where: { shop_name: shop_name },
        include: [
          {
            model: user,
            attributes: ["nickname"],
          },
        ],
      });
      return shopReview;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = ReviewRepository;
