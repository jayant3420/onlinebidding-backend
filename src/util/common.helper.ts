import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

class CommonHelper {
  hashingPassword = async (password: string): Promise<string> => {
    try {
      const saltRounds = parseInt(process.env.SALT_ROUNDS || "15", 10);
      if (isNaN(saltRounds)) {
        throw new Error("Invalid salt rounds, must be a number");
      }

      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error("Error hashing password ==>> " + error);
    }
  };

  comparePassword = async (
    password: string,
    hashedPassword: string
  ): Promise<boolean> => {
    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      return isMatch;
    } catch (error) {
      throw new Error("Error comparing passwords ==> " + error);
    }
  };

  generateAccessToken = (payload: any) => {
    try {
      const accessTokenSecretKey = process.env.ACCESS_TOKEN_SECRET;
      if (!accessTokenSecretKey) {
        throw new Error("access secret key is undefined");
      }
      return Jwt.sign(payload, accessTokenSecretKey, { expiresIn: "4h" });
    } catch (err) {
      console.log(err);
      throw new Error("Error in generating accessToken");
    }
  };

  generateRefreshToken = (payload: any) => {
    try {
      const refreshTokenSecretKey = process.env.REFRESH_TOKEN_SECRET;
      if (!refreshTokenSecretKey) {
        throw new Error("refresh secret key is undefined");
      }
      return Jwt.sign(payload, refreshTokenSecretKey, { expiresIn: "30d" });
    } catch (err) {
      console.log(err);
      throw new Error("Error in generating accessToken");
    }
  };
}

export default new CommonHelper();
