const ReviewPostService = require("../services/review_post.service");

class ReviewPostController {
  reviewPostService = new ReviewPostService();
  // 리뷰 작성하기
  reviewPost = async (req, res, next) => {
    const { user_id } = res.locals.user;
    const { star_rating, content, shop_id } = req.body;

    const imgPath = req.file.path;
    const image = imgPath.split("\\")[3];

    const reviewPostData = await this.reviewPostService.reviewPost(
      content,
      star_rating,
      image,
      user_id,
      shop_id
    );
    res.status(201).json({ data: reviewPostData });
  };
}
module.exports = ReviewPostController;
