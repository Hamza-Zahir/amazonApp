import Cart from "~~/server/models/cart";
import User from "~~/server/models/user";
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
    await User.findOneAndUpdate({ _id: userId }, { $pull: { SaveForLater: cartId } });

// $pull: { 'likers': req.params.name }
    return true;
  } catch (error) {
    throw error;
  }
});

