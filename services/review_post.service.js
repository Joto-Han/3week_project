const ReviewPostRepository = require("../repositories/review_post.repository");
const { review } = require("../models");

class ReviewPostService {
  reviewPostRepository = new ReviewPostRepository(review);
  // 리뷰 작성하기
  reviewPost = async (content, star_rating, image, user_id) => {
    const userData = await this.reviewPostRepository.findShop(user_id);

    const reviewData = await this.reviewPostRepository.reviewPost(
      content,
      star_rating,
      image,
      user_id,
      shop_name
    );
    return {
      content: reviewData.content,
      star_rating: reviewData.star_rating,
      image: reviewData.image,
      user_id: reviewData.user_id,
      shop_name: userData.shop_name,
    };
  };
}
module.exports = ReviewPostService;
