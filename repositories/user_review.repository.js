const { review, user } = require("../models");

class UserMyReviewRepository {
  reviewList = async (user_id) => {

    const userReview = await review.findAll({
      where: { user_id: user_id },
      include: [
        {
          model: user,
          attributes: ["nickname"],
        },
      ],
    });
    return userReview;

  };
}

module.exports = UserMyReviewRepository;
