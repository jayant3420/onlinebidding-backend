import { Request, Response } from "express";
import UserSerivce from "../../service/user/user.service";
import { CreateUserAccountRequest, CreateAccountResponse } from "./user.dtos";

class UserController {
  createAccount = async (
    req: Request<CreateUserAccountRequest>,
    res: Response<CreateAccountResponse>
  ) => {
    console.log("req body ==>>", req.body);
    const { email, firstName, lastName, password } = req.body;
    const requestPayload = {
      email,
      firstName,
      lastName,
      password,
    };
    // const result = await UserSerivce.createUser(requestPayload);
    // return res
    //   .status(201)
    //   .json({ message: "Account created successfully", user: result });
  };
}

export default new UserController();
