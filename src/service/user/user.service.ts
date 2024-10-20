import CommonHelper from "../../util/common.helper";
import { CreateUserRequestType, LoginRequestType } from "./user.service.type";
const db = require("../../../models");
class UserService {
  createUser = async (requestPayload: CreateUserRequestType) => {
    requestPayload.password = await CommonHelper.hashingPassword(
      requestPayload.password
    );
    const result = await db.users.create(requestPayload);
    delete result.password;
    return result;
  };

  getUserByEmailId = async (email: string) => {
    const user = await db.users.findOne({ where: { email } });
    return user.dataValues;
  };

  loginUser = async (loginReq: LoginRequestType) => {
    const userDetails = await this.getUserByEmailId(loginReq.email);
    return userDetails;
  };
}

export default new UserService();
