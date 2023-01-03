const ReviewPostRepository = require("../repositories/review_post.repository");
const { review } = require("../models");

class ReviewPostService {
  reviewPostRepository = new ReviewPostRepository(review);
  // 리뷰 작성하기
  reviewPost = async (shop_id, image, star_rating, content) => {
    console.log("2");
    const reviewShopData = await this.reviewPostRepository.findShop(shop_id);
    console.log("2-1");
    console.log(reviewShopData.shop_name);
    const reviewData = await this.reviewPostRepository.reviewPost(
      content,
      star_rating,
      image,
      reviewShopData.shop_name
    );
    console.log(reviewData);
    return {
      shop_id: reviewShopData.shop_id,
      // image: reviewShopData.image,
      // star_rating: reviewShopData.star_rating,
      // content: reviewShopData.content,
    };
  };
}

module.exports = ReviewPostService;
