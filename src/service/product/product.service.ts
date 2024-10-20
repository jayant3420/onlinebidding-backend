import { ProductListReqType } from "./product.service.type";
const db = require("../../../models");
class UserService {
  productList = async (reqPayload: ProductListReqType) => {
    const limit = reqPayload.pageSize;
    const offset = (reqPayload.page - 1) * reqPayload.pageSize;

    const response = await db.products.findAndCountAll({
      limit,
      offset,
    });

    return {
      totalItems: response.count,
      totalPages: Math.ceil(response.count / reqPayload.pageSize),
      currentPage: reqPayload.page,
      data: response.rows,
    };
  };

  productByIdwithBidHistory = async (productId: number) => {
    const product = await db.products.findOne({
      where: { id: productId }, // Find the product by its ID
      include: [
        {
          model: db.bids,
          as: "bids",
          order: [["bidTime", "DESC"]],
        },
      ],
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  };
}

export default new UserService();
