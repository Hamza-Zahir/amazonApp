import Cart from "~/server/models/cart";
import User from "~/server/models/user";

export default defineEventHandler(async (event) => {
  const context = event.context;
  const { userId }: any = context.params;

  try {
    const user:any =  await User.findOne({ _id: userId });

    const userCart = await Cart.find( { _id : { $in : user.cart } } );
    const userCartSaveForLater = await Cart.find( { _id : { $in : user.SaveForLater } } );
  //  SaveForLater
    return {userCart, userCartSaveForLater}
  } catch (error) {
    throw error;
  }
});
