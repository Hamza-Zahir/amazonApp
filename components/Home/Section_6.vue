<script setup>
const { getProductsByType } = useProduct();

const loading = ref(false);
const babyProducts = ref([]);
const stuffedAnimalsProducts = ref([]);
const amazonBasicsProducts = ref([]);

onMounted(async () => {
  loading.value = true;

  babyProducts.value = await getProductsByType("baby products");

  stuffedAnimalsProducts.value = await getProductsByType("stuffed animals");

  amazonBasicsProducts.value = await getProductsByType("amazon basics");
  loading.value = false;

});
</script>
<template>
  <div class="grid grid-cols-1 grid-rows-2 gap-[15px] xl:gap-5">
    <HomeCardsScrollCard
      :items="babyProducts"
      title="Best seller in baby products"
      productType="baby products"
      :loading="loading"
    />
    <HomeCardsScrollCard
      :items="stuffedAnimalsProducts"
      title="Stuffed Animals"
      productType="stuffed animals"
      :loading="loading"
    />

    <HomeCardsScrollCard
      :items="amazonBasicsProducts"
      title="Amazon Basics"
      productType="amazon basics"
      :loading="loading"
    />

   
  </div>
</template>

