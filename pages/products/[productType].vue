<script setup>
const { getProductsByType } = useProduct();
const route = useRoute();
const productType = route.params.productType;
const Products = ref(null);

onMounted(async () => {
  try {
    const products = await getProductsByType(productType);

    Products.value = products;
  } catch (error) {
    throw error;
  }
});
</script>

<template>
  <div class="">
    <div class="bg-gray-100">
      <div class="title shadow-md bg-gray-100">
        <div v-if="Products" class="font-medium pl-5 py-2">
          <span class="text-sm">
            1-{{ Products.length }} of over {{ Products.length }}
          </span>
          results for
          <span class="text-red-600 font-bold text-lg"
            >"{{ productType }}"</span
          >
        </div>
      </div>

      <div class="flex my-1">
        <div class="min-w-fit xl:min-w-[280px] p-4 hidden sm:block">
          <ProductsSidbar />
        </div>
        <div class="p-2 lg:p-4 w-full">
          <h4 class="m-3 text-xl font-bold">RESULTS</h4>
          <div v-if="Products">
              <ProductsItemCard v-for="product in Products" :key="product._id" :product="product" />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
