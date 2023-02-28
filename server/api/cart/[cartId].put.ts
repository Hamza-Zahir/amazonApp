import Cart from "~~/server/models/cart";
import User from "~~/server/models/user";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const context = event.context;
  const { cartId }: any = context.params;

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

    const cartItem: any = await Cart.findOne({ _id: cartId });

    const isGift = body.isGift;
    const quantity = body.quantity;

    console.log("isGift", typeof isGift, isGift);
    console.log("quantity", typeof quantity, quantity);

    if (quantity) {
      cartItem.quantity = Number(quantity);
      cartItem.save();
      return { 1: cartItem };
    } else {
      const sameCartitem = await Cart.findOne({
        isGift,
        userId,
        productId: cartItem.productId,
      });

      cartItem.isGift = isGift;

      if (!sameCartitem || sameCartitem._id === cartId) {
        cartItem.save();
        return { 2: cartItem };
      }
      cartItem.quantity = cartItem.quantity + sameCartitem.quantity;

      sameCartitem.remove();
      cartItem.save();
      return { 3: cartItem };
    }
  } catch (error) {
    throw error;
  }
});
// userId
// productId
// quantity
// isGift
