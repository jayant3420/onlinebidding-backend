import { Request, Response, NextFunction } from "express";
import Joi, { Schema } from "joi";

export const validateRequest = (
  schema: Schema,
  source: "body" | "query" = "body"
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const dataToValidate = req[source];

    const { error } = schema.validate(dataToValidate, { abortEarly: false });

    if (error) {
      // If validation fails, return a 400 response with the validation errors (bad request)
      const errors = error.details.map((err) => err.message);
      res.status(400).json({ errors });
      return;
    }

    next();
  };
};
