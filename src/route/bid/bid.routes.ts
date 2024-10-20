import { Router } from "express";
import { authenticateToken } from "../../middleware/token.middleware";
import { CreateBidSchema } from "./bid.schema";
import { validateRequest } from "../../middleware/validator";
import { asyncErrorCatch } from "../../util/error.catch.helper";
import Bid from "../../controller/bid/bid.controller";

const route = Router();

route.use(authenticateToken);
route.post(
  "/create",
  validateRequest(CreateBidSchema),
  asyncErrorCatch(Bid.createBid)
);

export default route;
