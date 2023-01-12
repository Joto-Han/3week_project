const { review } = require("../models");

class ReviewEditRepository {
  reviewData = async (review_id) => {
    const reviewData = await review.findOne({
      where: { review_id: review_id }
    });
    return reviewData;
  };

  reviewEditData = async (content, star_rating, image, user_id, shop_name, review_id) => {
    const reviewAddData = await review.update({
      where: { review_id: review_id },
      content,
      star_rating,
      image,
      user_id,
      shop_name,
    });
    return reviewAddData;
  };
}

module.exports = ReviewEditRepository;
