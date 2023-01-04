const { review } = require('../models');

class ReviewRepository {
  reviewList = async (shop_name) => {

    try {
      const shopReview = await review.findAll({
        where: { shop_name: shop_name },
      });

      return shopReview
    } catch (error) {

      throw error
    }
  };
};

module.exports = ReviewRepository;

// db단에서 발생하는 에러 ex) 인설트에러 , 업데이트에러
// 모든 에러는 컨트롤러로 모여서 , 컨트롤러에서 스테이터스 제공
// 컨트롤러는 클라이언트 에러