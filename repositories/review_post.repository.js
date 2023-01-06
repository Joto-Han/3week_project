const { review, wash_list, shop, user } = require("../models");

class ReviewPostRepository {
  findShop = async (image, star_rating, content, user_id) => {
    const shopData = await wash_list.findAll({
      where: { user_id: user_id },
      include: [
        {
          model: shop,
          attributes: ["shop_name"],
        },
      ],
    });
    return shopData;

    const reviewPostData = await review.create({
      shop_name,
      user_id,
      image,
      star_rating,
      content,
    });
    return reviewPostData;
  };
}

module.exports = ReviewPostRepository;
