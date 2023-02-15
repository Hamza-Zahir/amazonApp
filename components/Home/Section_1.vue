<script setup>
const isLoggedIn = useState("isLoggedIn");

const cardsInfo = reactive({
  card_1: {
    title: "Gaming accessories",
    img1: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg",
    img2: "https://m.media-amazon.com/images/I/71pPm31LFkS._AC_SX679_.jpg",
    img3: "https://m.media-amazon.com/images/I/611jbF+FbbL._AC_SL1500_.jpg",
    img4: "https://m.media-amazon.com/images/I/41sa6POLlvL._AC_SR160,160_.jpg",
    title1: "Headset",
    title2: "Keyboards",
    title3: "Computer mice",
    title4: "Chairs",
    productType1: "/products/headsets",
    productType2: "/products/keyboards",
    productType3: "/products/mice",
    productType4: "/products/chairs",
    link: "See more",
    page: "/gamingAccessories",
  },
  card_2: {
    title: "Shop by Category",
    img1: "https://m.media-amazon.com/images/I/41ylSM5ShbL._AC_SR160,160_.jpg",
    img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg",
    img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg",
    img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg",
    title1: "Computers & Accessories",
    title2: "Video Games",
    title3: "Baby",
    title4: "Toys & Games",
    productType1: "/products/computers",
    productType2: "/products/gaming+video_games",
    productType3: "/products/baby_products",
    productType4: "/products/toys",
    link: "Shop now",
    page: "/amazon_basics",
  },
  card_3: {
    title: "Beauty picks",
    img_sec:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
    link: "Shop now",
    page: "/products/beauty",
  },
  card_4: {
    title: "Computers & Accessories",
    img_sec:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
    link: "Shop now",
    page: "/products/computers",
  },
  card_5: {
    title: "Electronics",
    img_sec:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
    link: "See more",
    page: "/products/electronics",
  },
  card_6: {
    title: "Find your ideal TV",
    img_sec:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",
    link: "See more",
    page: "/products/tv",
  },
  card_7: {
    title: "Tablets",
    img_sec: "https://m.media-amazon.com/images/I/71QVRDLlSYL._AC_SX466_.jpg",
    link: "See more",
    page: "/products/tablets",
  },
  card_8: {
    title: "Deals & Promotions",
    img_sec:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg",
    link: "Shop now",
    page: "",
  },
  card_9: {
    title: "Easy returns",
    img_sec:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg",
    link: "Learn more",
    page: "",
  },
});
</script>
<template>
  <div class="Section_1 z-10">
    <CardsCardFourItems :cardInfo="cardsInfo.card_1" />
    <CardsCardFourItems :cardInfo="cardsInfo.card_2" class="text-center" />
    <CardsCardOneItem :cardInfo="cardsInfo.card_3" />

    <CardsSignInCard v-if="!isLoggedIn" />
    <CardsCardOneItem v-else :cardInfo="cardsInfo.card_4" />

    <CardsCardOneItem :cardInfo="cardsInfo.card_5" />
    <CardsCardOneItem :cardInfo="cardsInfo.card_6" />
    <CardsCardOneItem :cardInfo="cardsInfo.card_7" />
    <CardsCardOneItem :cardInfo="cardsInfo.card_8" />

    <div class="hidden md:flex xl:hidden">
      <CardsCardOneItem :cardInfo="cardsInfo.card_9" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Section_1 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  width: 100%;
  padding: 15px;

  @media (min-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    gap: 25px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 20px;
    gap: 20px;
  }
}
</style>
