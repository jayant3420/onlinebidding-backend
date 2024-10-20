import Joi from "joi";

export const CreateBidSchema = Joi.object({
  userId: Joi.number().min(1).required().messages({
    "any.required": "userId is required",
    "number.base": "userId must be a number",
    "number.min": "userId must be at least 1",
  }),
  productId: Joi.number().min(1).required().messages({
    "any.required": "productId is required",
    "number.base": "productId must be a number",
    "number.min": "productId must be at least 1",
  }),
  bidAmount: Joi.number().min(1).required().messages({
    "any.required": "bidAmount is required",
    "number.base": "bidAmount must be a number",
    "number.min": "bidAmount must be at least 1",
  }),
});
