import Product from "~/server/models/product";
export default defineEventHandler(async (event) => {
  const context = event.context;
  const { id }: any = context.params;

  try {
    const productResult = await Product.findOne({ _id: id });
 

    return productResult;
  } catch (error) {
    throw error;
  }
});

