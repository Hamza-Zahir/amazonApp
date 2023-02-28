import Cart from "~/server/models/cart";
export default defineEventHandler(async (event) => {
  const context = event.context;
  const { userId }: any = context.params;

  try {
    
    const userCart = await Cart.find({ userId });
  
    return userCart;
  } catch (error) {
    throw error;
  }
});
