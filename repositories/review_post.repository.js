const { review, wash_list, shop } = require("../models");

class ReviewPostRepository {
  // constructor(ReviewPost) {
  //   this.ReviewPost = ReviewPost;
  // }
  // 라우트 -> 컨트롤러 -> 서비스 -> 레파짓토리 (디비에서 외래키로 shop테이블에서 shop_name 가져오기) -> 서비스  -> 레파짓토리(디비에 리뷰 저장) - > 서비스 -> 컨트롤러
  // 리뷰 작성하기
  findShop = async (shop_id, image, star_rating, content) => {
    console.log(shop_id);
    console.log("3");
    const shopData = await wash_list.findByFk({
      // where: { shop_id: shop_id },
      // include: [
      //   {
      //     model: shop, // this.userModel,
      //     required: true,
      //     attributes: ["shop_id"],
      //   },
      // ],
    });
    console.log("3-1");
    console.log(shopData);
    return shopData;
  };

  reviewPost = async (shop_id, image, star_rating, content) => {
    console.log("3-2");
    const reviewPostData = await review.create({
      image: image,
      star_rating: star_rating,
      content: content,
    });
    console.log("3-3");
    return reviewPostData;
  };
}

module.exports = ReviewPostRepository;
