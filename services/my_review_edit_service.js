const ReviewEditRepository = require("../repositories/my_review_edit.repository");

class ReviewEditService {
  reviewEditRepository = new ReviewEditRepository();

  reviewData = async (review_id) => {
    const reviewFind = await this.reviewEditRepository.reviewData(review_id)
    
    return {
      review_id: reviewFind.review_id,
      content: reviewFind.content,
      star_rating: reviewFind.star_rating,
      Image: reviewFind.Image,
      user_id: reviewFind.user_id,
      shop_name: reviewFind.shop_name
    };
  };
}


reviewEdit = async (content, star_rating, image, user_id, shop_id, review_id) => {
  // const userData = await this.reviewPostRepository.findShop(user_id);
  const shopNameFind = await this.reviewPostRepository.shopNameFind(shop_id);
  const reviewData = await this.reviewPostRepository.reviewPostData(
    content,
    star_rating,
    image,
    user_id,
    shopNameFind.shop_name,
    review_id
  );
  return {
    content,
    star_rating,
    image,
    user_id,
    shop_id,
    review_id
  };
};

module.exports = ReviewEditService;
