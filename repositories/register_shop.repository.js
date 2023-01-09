const { json } = require('sequelize');
const { shop } = require('../models');

class RegiRepository {

  createuser = async (shop_name, password, shop_number, address) => {

    const existsUsers = await shop.findAll({
      where: { shop_name: shop_name },
    });
    try {

      if (existsUsers.length) {
        console.log("이미 존재하는 매장이름입니다.")
        return existsUsers
      }
      
        const createRegiData = await shop.create({ shop_name, password, shop_number, address });
        console.log("레지스터 레퍼지토리 - 저장 성공 : 사업자")
        return createRegiData;
        
    } catch (err) {
      console.log("회원가입중 알수 없는 에러 발생:",err);
      return
    }
  }

  edituser = async (shop_name,password,shop_number,address) => {
    try {
      const edit_user_data = await shop.update({
        shop_name: shop_name,
        password: password,
        shop_number: shop_number,
        address: address,
      }, {
        where: {shop_name:shop_name}
      })

      return edit_user_data
    } catch(err) {
      console.log("회원정보 수정중 알 수 없는 에러 발생 : ", err);
      return
    }
  }
}

module.exports = RegiRepository;