<script setup>
const { getProductsByType } = useProduct();
const beautyProducts = ref([]);
const KitchenProducts = ref([]);
const loading = ref(false);

onMounted(async () => {
  
  loading.value = true;
  KitchenProducts.value = await getProductsByType("kitchen");
  beautyProducts.value = await getProductsByType("beauty");
  loading.value = false;


});

</script>
<template>
  <div
    class="
      grid grid-cols-1 grid-rows-2
      gap-[15px]
      xl:gap-5

    "
  > 
   <HomeCardsScrollCard
      :items="KitchenProducts"
      title="Best selling in Kitchen"
    productType="Kitchen"
      :loading="loading"
    />
      <HomeCardsScrollCard
      :items="beautyProducts"
      title="Popular products in Beauty internationally"
      productType="beauty"
      :loading="loading"
    />
  
   
  </div>
</template>

