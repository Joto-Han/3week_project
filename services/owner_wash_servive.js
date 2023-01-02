const OwnerWashRepository = require("../repositories/owner_wash.repository");
const { wash_list } = require("../models/wash_list.js");
const user = require("../models/user");

class OwnerWashService {
  ownerWashRepository = new OwnerWashRepository(wash_list);

  findOwnerWashById = async (wash_id) => {
    const findWashData = await this.ownerWashRepository.findOwnerWashById(
      wash_id
    );
    const findUserData = await this.ownerWashRepository.findUserWashById(
      wash_id
    );

    return {
      wash_id: findWashData.wash_id,
      status: findWashData.status,
      extra: findWashData.extra,
      image: findWashData.image,
      createdAt: findWashData.createdAt,
      updatedAt: findWashData.updatedAt,
      user_id: findWashData.user_id,
      nickname: findUserData.user.nickname,
      address: findUserData.user.address,
      phone_number: findUserData.user.phone_number,
    };
  };

  statusUpdate = async (wash_id, status) => {
    const findWash = await this.ownerWashRepository.findOwnerWashById(wash_id);
    if (!findWash) throw new Error("Wash_list doesn't exist");

    const statusUpdate = await this.ownerWashRepository.findOwnerWashById(
      wash_id
    );
    let updateStatus = "";
    if (statusUpdate.status === "수거중") {
      updateStatus = "수거완료";
    }
    if (statusUpdate.status === "수거완료") {
      updateStatus = "배송중";
    }
    if (statusUpdate.status === "배송중") {
      updateStatus = "배송완료";
    }
    if (statusUpdate.status === "배송완료") {
      // 상태 업데이트 버튼 숨기기
    }

    await this.ownerWashRepository.statusUpdate(wash_id, updateStatus);
    return {
      wash_id: statusUpdate.wash_id,
      status: updateStatus,
    };
  };
}

module.exports = OwnerWashService;
