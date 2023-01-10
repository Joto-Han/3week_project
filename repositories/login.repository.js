const { user } = require("../models");

class loginRepository {
  finduser = async (nickname, password) => {
    const exuser = await user.findOne({ where: { nickname: nickname } });
    return exuser;
  };
}

module.exports = loginRepository;
