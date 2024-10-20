import ProductService from "../../service/product/product.service";
import { Request, Response } from "express";

interface HttpError extends Error {
  status?: number;
}

class ProductController {
  fetchProductList = async (req: Request, res: Response) => {
    const { page, pageSize } = req.query;
    const response = await ProductService.productList({
      page: typeof page === "string" ? parseInt(page, 10) : 1,
      pageSize: typeof pageSize === "string" ? parseInt(pageSize, 10) : 10,
    });
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: response });
  };

  productByIdwithBidHistory = async (req: Request, res: Response) => {
    let productId = 0;
    if(typeof req.query.productId === 'string') {
        productId = parseInt(req.query.productId, 10);
    } else {
        const error = new Error("ProductId is not valid") as HttpError;
        error.status = 500;
        throw error;
    }

    const response = await ProductService.productByIdwithBidHistory(productId);
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: response });
  };
}

export default new ProductController();
