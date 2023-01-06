const ReviewPostRepository = require("../repositories/review_post.repository");
const { review } = require("../models");

class ReviewPostService {
  reviewPostRepository = new ReviewPostRepository(review);
  // 리뷰 작성하기
  reviewPost = async (shop_name, user_id, image, star_rating, content) => {
    const reviewData = await this.reviewPostRepository.reviewPost(
      shop_name,
      user_id,
      image,
      star_rating,
      content
    );
    return {
      shop_name,
      user_id,
      image,
      star_rating,
      content,
    };
  };
}
module.exports = ReviewPostService;
