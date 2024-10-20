import bcrypt from "bcrypt";

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
}

export default new CommonHelper();
