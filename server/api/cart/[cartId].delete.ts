import Cart from "~~/server/models/cart";
import User from "~~/server/models/user";
import { cartSchema } from "~~/server/validation";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const context = event.context;
  const { cartId }: any = context.params;

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

    await Cart.remove({ _id: cartId });

    return true;
  } catch (error) {
    throw error;
  }
});

