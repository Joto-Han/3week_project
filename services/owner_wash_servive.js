const OwnerWashRepository = require("../repositories/owner_wash.repository");
const { wash_list, user } = require("../models");

class OwnerWashService {
  ownerWashRepository = new OwnerWashRepository(wash_list);

  findOwnerWashById = async (wash_id, shop_id) => {
    const findWashData = await this.ownerWashRepository.findOwnerWashById(
      wash_id
    );
    if (findWashData.shop_id !== shop_id) {
      return res.status(400).json({ success: false });
    }
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
      // test 코드용
      // nickname: findUserData.nickname,
      // address: findUserData.address,
      // phone_number: findUserData.phone_number,
    };
  };

  statusUpdate = async (wash_id) => {
    const findWash = await this.ownerWashRepository.findOwnerWashById(wash_id);
    if (!findWash) throw new Error("진행중인 세탁이 없거나 잘못된 접근입니다.");

    const statusUpdate = await this.ownerWashRepository.findOwnerWashById(
      wash_id
    );
    let updateStatus = "";
    if (statusUpdate.status === 1) {
      updateStatus = 2;
    }
    if (statusUpdate.status === 2) {
      updateStatus = 3;
    }
    if (statusUpdate.status === 3) {
      updateStatus = 4;
      // const shopStatusFindZero =
      //   await this.ownerWashRepository.shopStatusFindZero(statusUpdate.shop_id);
      const shopStatusZero = await this.ownerWashRepository.shopStatusZero(
        statusUpdate.shop_id
      );
    }

    await this.ownerWashRepository.statusUpdate(wash_id, updateStatus);
    return {
      wash_id: statusUpdate.wash_id,
      status: updateStatus,
    };
  };
}

module.exports = OwnerWashService;
