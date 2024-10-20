import BidService from "../../service/bid/bid.service";
import { Request, Response } from "express";

class BidController {
  createBid = async (req: Request, res: Response) => {
    const { userId, productId, bidAmount } = req.body;
    const response = await BidService.createBid({
      userId,
      productId,
      bidAmount,
    });
    return res
      .status(201)
      .json({ message: "Bid created successfully", data: response.dataValues });
  };
}

export default new BidController();
