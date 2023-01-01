const { user } = require('../models');

class loginRepository {

    userlogin = async (nickname, password) => {
    console.log("로그인 레포지토리");
    console.log("닉네임:", nickname);
    
    const exuser = await user.findOne({
      where: { nickname: nickname },
    })
    return exuser
  }
}

module.exports = loginRepository;