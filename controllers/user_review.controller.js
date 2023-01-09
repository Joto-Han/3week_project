const UserMyReviewService = require('../services/user_review.service');

class UserMyReviewController {
  userMyReviewService = new UserMyReviewService();

  reviewList = async (req, res, next) => {

    const { user_id } = res.locals.user;

    const userReview = await this.userMyReviewService.reviewList(user_id);

    res.status(200).json({ data: userReview });
  };
};

module.exports = UserMyReviewController;