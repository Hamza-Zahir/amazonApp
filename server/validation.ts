import Joi from "joi";
import User from "./models/user";
  // const isAuth =  definePageMeta({
  //   middleware: "is-auth",
  // });
export const userSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .message("Please enter a valid email. With a .com or .net extension")
    .external(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw createError({
          statusMessage: "E-Mail address already exists!",
          statusCode: 401,
          fatal: false,
        });
      }
    }),
  password: Joi.string().trim().min(6).required(),
  name: Joi.string().trim().not().empty(),
  location: Joi.string(),
  imgUrl: Joi.string(),
  imgFileName: Joi.string(),
});

export const productSchema = Joi.object({
  productType: Joi.string().required(),
  description: Joi.string().required(),
  currentPrice: Joi.number().required(),
  oldPrice: Joi.number(),
  creator: Joi.required(),

});

export const commentSchema = Joi.object({
  comment: Joi.string().required(),
  creator: Joi.required(),
});