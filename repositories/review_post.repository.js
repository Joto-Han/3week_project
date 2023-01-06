const { review, wash_list, shop, user } = require("../models");

class ReviewPostRepository {
  reviewPost = async (shop_name, user_id, image, star_rating, content) => {
    const reviewPostData = await review.create({
      shop_name,
      user_id,
      image,
      star_rating,
      content,
    });
    return reviewPostData;
  };
}

module.exports = ReviewPostRepository;
