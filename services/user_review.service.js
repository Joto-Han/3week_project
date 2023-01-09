const UserMyReviewRepository = require("../repositories/user_review.repository");

class UserMyReviewService {
  userMyReviewRepository = new UserMyReviewRepository();

  reviewList = async (user_id) => {
      const reviewData = await this.userMyReviewRepository.reviewList(user_id);

      return reviewData.map((data) => {
        return {
          review_id: data.review_id,
          content: data.content,
          star_rating: data.star_rating,
          user_id: data.user_id,
          shop_name: data.shop_name,
          createdAt: data.createdAt,
          nickname: data.user.nickname
        };
      });
  };
}

module.exports = UserMyReviewService;
