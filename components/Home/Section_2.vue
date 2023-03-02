<script setup>
const { getProductsByType } = useProduct();
const loading = ref(false);
const fitnessProducts = ref([]);
const householdProducts = ref([]);
onMounted(async () => {
  loading.value = true;
  fitnessProducts.value = await getProductsByType("fitness");

  householdProducts.value = await getProductsByType("household products");
  loading.value = false;
});
</script>
<template>
  <div class="grid grid-cols-1 grid-rows-2 gap-[15px] xl:gap-[20px]">
    <HomeCardsScrollCard
      :items="fitnessProducts"
      title="Best selling sports products"
      productType="fitness"
      :loading="loading"
    />
    <HomeCardsScrollCard
      :items="householdProducts"
      title="International top sellers in Home"
      productType="household products"
      :loading="loading"
    />
  </div>
</template>

