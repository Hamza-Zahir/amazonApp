const useProduct = () => {
  const getProductsByType = async (ProductType: string) => {
    const _productType = ProductType.replace(" ", "%20");

    try {
      const products = await $fetch(`/api/products/${_productType}`);
      if (!products.length) {
        throw createError({
          message: "Page not found",
          statusCode: 404,
          fatal: true,
        });
      }
      return products;
    } catch (error) {
      throw error;
    }
  };
  const getProductById = async (id: string) => {
    try {
      const product = await $fetch(`/api/product/${id}`);
      if (!product) {
        throw createError({
          statusCode: 404,
          statusMessage: "page not found",
          fatal: true,

        });
      }
      return product;
    } catch (error) {
      throw error;
    }
  };
  return { getProductsByType, getProductById };
};
export default useProduct;
