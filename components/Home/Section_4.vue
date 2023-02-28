<script setup>
const { getProductsByType } = useProduct();

const dataCards = reactive({
  card_1: null,
  card_2: null
});
onMounted(async () => {
 const KitchenProducts = await getProductsByType("kitchen");
  dataCards.card_1 = {
    items: KitchenProducts,
    title: "Best selling in Kitchen",
    productType: "Kitchen",
  }
 const beautyProducts = await getProductsByType("beauty");
 dataCards.card_2 = {
    items: beautyProducts,
    title: "Popular products in Beauty internationally",
    productType: "beauty",
  }

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
    <HomeCardsScrollCard v-if="dataCards.card_1" :dataCard="dataCards.card_1" />
    <HomeCardsScrollCard v-if="dataCards.card_2" :dataCard="dataCards.card_2" />
  </div>
</template>

