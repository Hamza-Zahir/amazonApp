import Cart from "~~/server/models/cart";
import User from "~~/server/models/user";
import { cartSchema } from "~~/server/validation";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  let body = await readBody(event);

  const { JWT_SWNTENSCE } = useRuntimeConfig();

  try {
    const authHeader: any = event.req.headers.authentication;

    const { userId, email }: any = jwt.verify(authHeader, JWT_SWNTENSCE);
    const user: any = await User.findOne({ _id: userId, email });

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      });
    }

    let { error } = cartSchema.validate({ ...body, userId });

    if (error) {
      throw createError({
        statusMessage: error.message,
        statusCode: 401,
      });
    }

    const { productId, isGift, quantity } = body;

    const cartItem = await Cart.findOne({ userId, productId, isGift });
    if (!cartItem) {
      const cartItemRespons = await Cart.create({
        userId,
        productId,
        quantity,
        isGift,
      });
      await User.findOneAndUpdate({ _id: userId }, { $push: { cart: cartItemRespons._id } });
      return cartItemRespons;
    }
    cartItem.quantity = cartItem.quantity + quantity;

    cartItem.save();

    return cartItem;
  } catch (error) {
    throw error;
  }
});
