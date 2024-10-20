import { Router } from "express";
import { authenticateToken } from "../../middleware/token.middleware";
import Product from "../../controller/product/product.controller";
import {
  FetchProductListSchema,
  FetchProductDetailSchema,
} from "./product.schema";
import { validateRequest } from "../../middleware/validator";
import { asyncErrorCatch } from "../../util/error.catch.helper";

const route = Router();

route.use(authenticateToken);
route
  .get(
    "/list",
    validateRequest(FetchProductListSchema, "query"),
    asyncErrorCatch(Product.fetchProductList)
  )
  .get(
    "/detail",
    validateRequest(FetchProductDetailSchema, "query"),
    asyncErrorCatch(Product.productByIdwithBidHistory)
  );

export default route;
