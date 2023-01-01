const logRepository = require('../repositories/login.repository');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

class logiService {
  loginRepository = new logRepository();


  userlogin = async (nickname, password) => {

    const user = await this.loginRepository.userlogin(nickname,password)

    try {

      if(user === null || password !== user.password) {
          return {
            errorMessage:"닉네임 또는 패스워드가 일치하지 않습니다."
          }
      }
  
      const token = jwt.sign({nickname: nickname }, "customized-secret-key");
      console.log("이것은 토큰입니다." , token);
      
      return {token}
    } catch(err) {
      console.log("에러난 이유:", err);
      return {errorMessage:"알 수 없는 에러가 발생하였습니다.(로그인)"}
    }

  }
}

module.exports = logiService;


