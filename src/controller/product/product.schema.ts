import Joi from "joi";

export const FetchProductListSchema = Joi.object({
  page: Joi.number().min(1).required().messages({
    "any.required": "page is required",
    "number.base": "page must be a number",
    "number.min": "page must be at least 1",
  }),
  pageSize: Joi.number().min(1).required().messages({
    "any.required": "pageSize is required",
    "number.base": "pageSize must be a number",
    "number.min": "pageSize must be at least 1",
  }),
});

export const FetchProductDetailSchema = Joi.object({
  productId: Joi.number().min(1).required().messages({
    "any.required": "productId is required",
    "number.base": "productId be a number",
    "number.min": "productId be at least 1",
  }),
});
