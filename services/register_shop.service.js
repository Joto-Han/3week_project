const registerRepository = require("../repositories/register_shop.repository");

class RegiService {
  regiRepository = new registerRepository();

  createuser = async (shop_name, password, shop_number, address) => {
    const createRegiData = await this.regiRepository.createuser(
      shop_name,
      password,
      shop_number,
      address
    );
    return {
      shop_id: createRegiData.null,
      shop_name: createRegiData.shop_name,
      password: createRegiData.password,
      shop_number: createRegiData.shop_number,
      address: createRegiData.address,
      createdAt: createRegiData.createdAt,
      updatedAt: createRegiData.updatedAt,
      point: createRegiData.point,
      shop_status: createRegiData.shop_status,
    };
  };

  edituser = async (shop_name, password, shop_number, address) => {
    const edituserdata = await this.regiRepository.edituser(
      shop_name,
      password,
      shop_number,
      address
    );
    return {
      shop_id: edituserdata.null,
      shop_name: edituserdata.shop_name,
      password: edituserdata.password,
      shop_number: edituserdata.shop_number,
      address: edituserdata.address,
      createdAt: edituserdata.createdAt,
      updatedAt: edituserdata.updatedAt,
      point: edituserdata.point,
      status: edituserdata.status,
    };
  };
}

module.exports = RegiService;
