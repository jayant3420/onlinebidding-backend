import CommonHelper from "../../util/common.helper";
import { Request, Response } from "express";
import UserSerivce from "../../service/user/user.service";
interface HttpError extends Error {
  status?: number;
}
class UserController {
  createAccount = async (req: Request, res: Response) => {
    const { email, firstName, lastName, password } = req.body;
    const requestPayload = {
      email,
      firstName,
      lastName,
      password,
    };

    const isUserExist = await UserSerivce.getUserByEmailId(
      requestPayload.email
    );

    // 'isUserExist' will get null if user does not exist
    if (isUserExist) {
      const error = new Error(
        "User already exist with this email id"
      ) as HttpError;
      error.status = 400;
      throw error;
    }

    const result = await UserSerivce.createUser(requestPayload);
    return res
      .status(201)
      .json({ message: "Account created successfully", user: result });
  };

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const requestPayload = {
      email,
      password,
    };
    const userDetails = await UserSerivce.loginUser(requestPayload);

    if (!userDetails) {
      const error = new Error("User does not exist") as HttpError;
      error.status = 404;
      throw error;
    }

    const isPasswordMatched = await CommonHelper.comparePassword(
      password,
      userDetails.password
    );

    if (!isPasswordMatched) {
      const error = new Error("Unauthorized: Invalid credentials") as HttpError;
      error.status = 401;
      throw error;
    }

    delete userDetails.password;
    delete userDetails.deviceToken;

    const accessToken = CommonHelper.generateAccessToken(userDetails);
    const refreshToken = CommonHelper.generateRefreshToken(userDetails);

    const responsePayload = {
      accessToken,
      refreshToken,
      id: userDetails.id,
      email: userDetails.email,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
    };

    res
      .status(200)
      .json({ message: "Login Successfull", data: responsePayload });
  };
}

export default new UserController();
