import { Router } from "express";
import { apiKeyAuthorizer } from "../../middleware/apikey.authorizer";
import user from "./user/user.routes";

const routes = Router();

routes.use("/user", apiKeyAuthorizer, user);

export default routes;