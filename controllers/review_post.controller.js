const ReviewPostService = require("../services/review_post.service");

class ReviewPostController {
  reviewPostService = new ReviewPostService();
  // 리뷰 작성하기
  reviewPost = async (req, res, next) => {
    const { shop_id } = req.params;
    console.log(req.params);
    const { image, star_rating, content } = req.body;
    console.log("1");
    const reviewPostData = await this.reviewPostService.reviewPost(
      image,
      star_rating,
      content,
      shop_id
    );
    console.log("1-1");
    res.status(201).json({ data: reviewPostData });
  };
}

module.exports = ReviewPostController;
