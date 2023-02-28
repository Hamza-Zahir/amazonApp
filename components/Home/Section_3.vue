<script setup>

const cardsInfo = reactive({
  card_1: {
    title: "Gaming merchandise",
    img1: "https://m.media-amazon.com/images/I/71NB1Z5wJ5S._AC_UL320_.jpg",
    img2: "https://m.media-amazon.com/images/I/81W9UgXFwtL._AC_UL320_.jpg",
    img3: "https://m.media-amazon.com/images/I/81vFUqJgdnL._AC_UL320_.jpg",
    img4: "https://m.media-amazon.com/images/I/61nDgQXtdhL._AC_UL320_.jpg",
    title1: "Apparel",
    title2: "Hats",
    title3: "Mugs",
    title4: "Action Figures",
    productType1: "/products/apparel",
    productType2: "/products/hats",
    productType3: "/products/mugs",
    productType4: "/products/action figures",
    link: "See more",
    page: "/gamingAccessories",
  },
  card_2: {
    title: "Shop activity trackers and smartwatches",
    img_sec:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg",
    link: "Shop now",
    page: "/products/smart watches",
  },
  card_3: {
    title: "Clothes",
    img1: "https://m.media-amazon.com/images/I/61iDKNQdzOL._AC_UL320_.jpg",
    img2: "https://m.media-amazon.com/images/I/810XtUqxJiL._AC_UL320_.jpg",
    img3: "https://m.media-amazon.com/images/I/71ZSqY1EVBL._AC_UL320_.jpg",
    img4: "https://m.media-amazon.com/images/I/71gpR-r22HL._AC_UL320_.jpg",
    title1: "Sweatshirts",
    title2: "Joggers",
    title3: "Cardigans",
    title4: "tees",
    productType1: "/products/sweatshirts",
    productType2: "/products/joggers",
    productType3: "/products/cardigans",
    productType4: "/products/tees",
    link: "See more",
    page: "/",
  },
 
  card_4: {
    title: "For your Fitness Needs",
    img_sec:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg",
    link: "Shop now",
    page: "/products/fitness",
  },
});
</script>
<template>
  <div
    class="
      grid
      gap-[15px]
      xl:gap-5
      grid-cols-1
      sm:grid-rows-2 sm:grid-cols-2
      md:grid-rows-1 md:grid-cols-3
      xl:grid-cols-4
    "
  >
    <HomeCardsCardFourItems :cardInfo="cardsInfo.card_1" class="text-center" />
    <HomeCardsCardOneItem :cardInfo="cardsInfo.card_2" />
    <HomeCardsCardFourItems :cardInfo="cardsInfo.card_3" class="text-center" />
    <div class="flex md:hidden xl:flex">
      <HomeCardsCardOneItem :cardInfo="cardsInfo.card_4" class="w-full h-full" />
    </div>
  </div>
</template>
