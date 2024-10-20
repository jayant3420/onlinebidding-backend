import { Request, Response, NextFunction } from "express";

interface HttpError extends Error {
  status?: number; // Optional HTTP status code
}

// Global error handling middleware
export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack); // Log the error for debugging purposes

  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};
