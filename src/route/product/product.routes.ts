import { Router } from "express";
import { authenticateToken } from "../../middleware/token.middleware";
import Product from "../../controller/product/product.controller";
import {
  FetchProductListSchema,
  FetchProductDetailSchema,
} from "./product.schema";
import { validateRequest } from "../../middleware/validator";
import { asyncErrorCatch } from "../../util/error.catch.helper";
import { apiKeyAuthorizer } from "../../middleware/apikey.authorizer";


const route = Router();

route.get(
  "/list",
  apiKeyAuthorizer,
  validateRequest(FetchProductListSchema, "query"),
  asyncErrorCatch(Product.fetchProductList)
);

route.get(
  "/detail",
  authenticateToken,
  validateRequest(FetchProductDetailSchema, "query"),
  asyncErrorCatch(Product.productByIdwithBidHistory)
);

export default route;
