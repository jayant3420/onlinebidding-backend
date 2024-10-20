import { Router } from "express";
import { validateRequest } from "../../../middleware/validator";
import { asyncErrorCatch } from "../../../util/error.catch.helper";
import { schemaCreateAccount, schemaLogin } from "./user.schema";
import userController from "../../../controller/user/user.controller";

const router = Router();

router
    .post(
        "/sign-up",
        validateRequest(schemaCreateAccount),
        asyncErrorCatch(userController.createAccount)
    )
    .post(
        "/login", validateRequest(schemaLogin), asyncErrorCatch(userController.login)
    )

export default router;
