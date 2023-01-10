const ReviewPostRepository = require("../repositories/review_post.repository");
const { review } = require("../models");

class ReviewPostService {
  reviewPostRepository = new ReviewPostRepository(review);
  // 리뷰 작성하기
  reviewPost = async (content, star_rating, image, user_id, shop_id) => {
    // const userData = await this.reviewPostRepository.findShop(user_id);
    const shopNameFind = await this.reviewPostRepository.shopNameFind(shop_id);
    const reviewData = await this.reviewPostRepository.reviewPostData(
      content,
      star_rating,
      image,
      user_id,
      shopNameFind.shop_name
    );
    return {
      content,
      star_rating,
      image,
      user_id,
      shop_id,
    };
  };
}
module.exports = ReviewPostService;
