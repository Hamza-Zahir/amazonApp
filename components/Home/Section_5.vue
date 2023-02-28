<script setup>

const cardsInfo = reactive({

   card_1 : {
  title: "Shop Pet supplies",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg",
  link: "See more",
  page: "/products/pet supplies",
},

 card_2 : {
  title: "Phones",
  img1: "https://m.media-amazon.com/images/I/71GbORP-umL._AC_UY218_.jpg",
  img2: 'https://m.media-amazon.com/images/I/71c5rhsUkxL._AC_UY218_.jpg',
  img3: "https://m.media-amazon.com/images/I/61bfdXk7nfL._AC_SL1500_.jpg",
  img4: "https://m.media-amazon.com/images/I/81-iFZ14NGS._AC_SL1500_.jpg",
  title1: "Motorola One 5G Ace",
  title2: "Samsung Galaxy S22 ",
  title3: "SAMSUNG Electronics Galaxy",
  title4: "TCL 20 Pro 5G",  
  productType1: "/products/phones",
  productType2: "/products/phones",
  productType3: "/products/phones",
  productType4: "/products/phones",
  link: "Shop now",
  page: "/products/phones",
},
 card_3 : {
  title: "Create with strip lights",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",
  link: "Shop now",
  page: "/products/night lights",
},

  card_4: {
    title: "Home & kitchen essentials",
    img1: "https://m.media-amazon.com/images/I/818iZfNVjsL._AC_SY175_.jpg",
    img2: "https://images-na.ssl-images-amazon.com/images/I/71ygLu2o0OL._AC_UL116_SR116,116_.jpg",
    img3: "https://m.media-amazon.com/images/I/71arz0qwi7L._AC_SL1500_.jpg",
    img4: "https://m.media-amazon.com/images/I/91l5w1ylVzL._AC_SL1500_.jpg",
    title1: "Cast Iron Skillet",
    title2: "Pyrex Glass",
    title3: "Peeler Set",
    title4: "Nonstick Pans Set",
    productType1: "/products/kitchen",
    productType2: "/products/kitchen",
    productType3: "/products/kitchen",
    productType4: "/products/kitchen",
    link: "Shop now",
    page: "/products/kitchen",
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
    <HomeCardsCardOneItem :cardInfo="cardsInfo.card_1"  />
    <HomeCardsCardFourItems :cardInfo="cardsInfo.card_2" class="text-center" />
     <HomeCardsCardOneItem :cardInfo="cardsInfo.card_3"  />
    <div class="flex md:hidden xl:flex">
      <HomeCardsCardFourItems :cardInfo="cardsInfo.card_4" class="w-full h-full text-center" />
    </div> 
  </div>
</template>
