import Product from "~/server/models/product";
export default defineEventHandler(async (event) => {
  const context = event.context;
  const { productType }: any = context.params;
  const _productType = productType.replace("%20", " ");
  try {
    const Products = await Product.find({ productType: _productType });

    return Products;
  } catch (error) {
    throw error;
  }
});
