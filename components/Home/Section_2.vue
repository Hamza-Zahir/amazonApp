<script setup>
import Products from "~/json/Products.json";

const dataCards = reactive({
  card_1: {
    items: Products,
    title: "Best selling sports products",
    productType: "sports",
  },
  card_2: {
    items: Products,
    title: "International top sellers in Home",
    productType: "Home",
  },
});
</script>
<template>
  <div
    class="
      grid grid-cols-1 grid-rows-2
      gap-y-[15px]
      xl:gap-y-[20px]
      px-[15px]
      xl:px-[20px]
    "
  >
    <CardsScrollCard :dataCard="dataCards.card_1" />
    <CardsScrollCard :dataCard="dataCards.card_2" />
  </div>
</template>

