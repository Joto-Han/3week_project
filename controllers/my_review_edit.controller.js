const ReviewEditService = require("../services/my_review_edit_service");

class ReviewEditController {
  reviewEditService = new ReviewEditService();

  reviewData = async (req, res, next) => {
    const { review_id } = req.params;

    const review = await this.reviewEditService.reviewData(review_id)

    res.status(201).json({ data: review });
  }

  reviewEdit = async (req, res, next) => {
    const { user_id } = res.locals.user;
    const {review_id} = req.params;
    const { star_rating, content, shop_id } = req.body;

    const imgPath = req.file.path;
    const image = imgPath.split("\\")[3];

    const reviewEditData = await this.reviewEditService.reviewEdit(
      content,
      star_rating,
      image,
      user_id,
      shop_id,
      review_id
    );
    res.status(201).json({ data: reviewEditData });
  };
}
module.exports = ReviewEditController;
