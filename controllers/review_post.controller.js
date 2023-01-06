const ReviewPostService = require("../services/review_post.service");

class ReviewPostController {
  reviewPostService = new ReviewPostService();
  // 리뷰 작성하기
  reviewPost = async (req, res, next) => {
    const { user_id } = res.locals.user;
    const { shop_name } = req.params;
    const { image, star_rating, content } = req.body;
    const reviewPostData = await this.reviewPostService.reviewPost(
      shop_name,
      user_id,
      image,
      star_rating,
      content
      );
      res.status(201).json({ data: reviewPostData });
    };
  }
  
module.exports = ReviewPostController;
