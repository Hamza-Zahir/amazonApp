<script setup>
const { getProductsByType } = useProduct();

const dataCards = reactive({
  card_1: null,
  card_2: null,
  card_3: null,
});
onMounted(async () => {
  const babyProducts = await getProductsByType("baby products");
  dataCards.card_1 = {
    items: babyProducts,
    title: "Best seller in baby products",
    productType: "baby products",
  };
  const stuffedAnimalsProducts = await getProductsByType("stuffed animals");
  dataCards.card_2 = {
    items: stuffedAnimalsProducts,
    title: "Stuffed Animals",
    productType: "stuffed animals",
  };
  const amazonBasicsProducts = await getProductsByType("amazon basics");

  dataCards.card_3 = {
    items: amazonBasicsProducts,
    title: "Amazon Basics",
    productType: "amazon basics",
  }; 

});
</script>
<template>
  <div class="grid grid-cols-1 grid-rows-2 gap-[15px] xl:gap-5">
    <HomeCardsScrollCard v-if="dataCards.card_1" :dataCard="dataCards.card_1" />
    <HomeCardsScrollCard v-if="dataCards.card_2" :dataCard="dataCards.card_2" />
    <HomeCardsScrollCard v-if="dataCards.card_3" :dataCard="dataCards.card_3" />
  </div>
</template>

