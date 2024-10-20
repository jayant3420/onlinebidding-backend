import { CreateBidRequestType } from "./bid.service.type";
const db = require("../../../models");

class UserService {
  createBid = async (reqPayload: CreateBidRequestType) => {
    const transaction = await db.sequelize.transaction();
    try {
      const { userId, bidAmount, productId } = reqPayload;
      const product = await db.products.findOne({
        where: { id: productId },
        lock: true,
        transaction,
      });

      if (!product) {
        throw new Error("Product not found");
      }

      if (
        bidAmount <= product.dataValues.minBidAmount ||
        (product.dataValues.currentBidAmount &&
          bidAmount <= product.dataValues.currentBidAmount)
      ) {
        throw new Error(
          "Bid amount must be higher than the minimum and current bid amount"
        );
      }

      await db.products.update(
        { currentBidAmount: bidAmount },
        { where: { id: productId }, transaction }
      );

      const newBid = await db.bids.create(
        {
          userId: userId,
          productId: productId,
          bidAmount: bidAmount,
        },
        { transaction }
      );

      await transaction.commit();
      return newBid;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };
}

export default new UserService();
