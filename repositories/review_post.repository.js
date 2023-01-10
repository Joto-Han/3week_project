const { review, shop } = require("../models");

class ReviewPostRepository {
  shopNameFind = async (shop_id) => {
    const shopNameFind = await shop.findOne({
      where: { shop_id },
    });
    return shopNameFind;
  };

  reviewPostData = async (content, star_rating, image, user_id, shop_name) => {
    const reviewAddData = await review.create({
      content,
      star_rating,
      image,
      user_id,
      shop_name,
    });
    return reviewAddData;
  };
}

module.exports = ReviewPostRepository;
