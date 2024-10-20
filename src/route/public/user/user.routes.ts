import { Router } from "express";
import { validateRequest } from "../../../middleware/validator";
import { asyncErrorCatch } from "../../../util/async.catch.helper";
import { schemaCreateAccount } from "./user.schema";
import userController from "../../../controller/user/user.controller";

const router = Router();

router.post(
  "/sign-up",
  validateRequest(schemaCreateAccount),
  asyncErrorCatch(userController.createAccount)
);

export default router;
