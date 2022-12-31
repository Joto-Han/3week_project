const logRepository = require('../repositories/login.repository');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

class logiService {
  loginRepository = new logRepository();


  userlogin = async (nickname, password) => {

    const user = await this.loginRepository.userlogin(nickname,password)

    if(user === null || password !== user.password) {
        return {
          errorMessage:"닉네임 또는 패스워드가 일치하지 않습니다."
        }
    }

    const token = jwt.sign({nickname: nickname }, "customized-secret-key");
    console.log("이것은 토큰입니다." , token);
    
    return {token}
  }
}

module.exports = logiService;


