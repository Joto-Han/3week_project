const registerRepository = require('../repositories/register.repository');

class PostService {
  regiRepository = new registerRepository();

  // findAllPost = async () => {
  //   // 저장소(Repository)에게 데이터를 요청합니다.
  //   const allPost = await this.regiRepository.findAllPost();

  //   // 호출한 Post들을 가장 최신 게시글 부터 정렬합니다.
  //   allPost.sort((a, b) => {
  //     return b.createdAt - a.createdAt;
  //   })

  //   // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
  //   return allPost.map(post => {
  //     return {
  //       postId: post.postId,
  //       nickname: post.nickname,
  //       title: post.title,
  //       createdAt: post.createdAt,
  //       updatedAt: post.updatedAt
  //     }
  //   });
  // }

  createuser = async (nickname, password, phone_number, address) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createRegiData = await this.regiRepository.createuser(nickname, password, phone_number, address);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      id: createRegiData.null,
      nickname: createRegiData.nickname,
      password: createRegiData.password,
      phone_number: createRegiData.phone_number,
      address: createRegiData.address,
      createdAt: createRegiData.createdAt,
      updatedAt: createRegiData.updatedAt,
    };
  }
}

module.exports = PostService;