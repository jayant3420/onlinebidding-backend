import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
interface AuthenticatedRequest extends Request {
  user?: any;
}

interface HttpError extends Error {
  status?: number;
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token) {
    const error = new Error("Access denied, token missing") as HttpError;
    error.status = 401;
    throw error;
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
    if (err) {
      const error = new Error(err.message) as HttpError;
      error.status = 401;
      throw error;
    }
    req.user = user;
    next();
  });
};
