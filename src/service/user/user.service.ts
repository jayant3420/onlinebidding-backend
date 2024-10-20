import { CreateUserRequestPayload } from "./user.service.type";
const { db } = require("../../../models");
console.log("Db ==>>", db);
class UserService {
  createUser = async (requestPayload: CreateUserRequestPayload) => {
    const result = await db.users.create(requestPayload);
    return result;
  };
}

export default new UserService();
