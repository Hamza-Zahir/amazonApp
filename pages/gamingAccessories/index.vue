<script setup>
const gamingAccessories = [
  {
    type: "nintendo",
    img: "https://m.media-amazon.com/images/I/61p7KWU8POL._AC_UY218_.jpg",
  },
  {
    type: "oculus",
    img: "https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UY218_.jpg",
  },
  {
    type: "laptops",
    img: "https://m.media-amazon.com/images/I/71zWWrtLStL._AC_UY218_.jpg",
  },
  {
    type: "controllers",
    img: "https://m.media-amazon.com/images/I/81kKfnnHeuL._AC_UY218_.jpg",
  },
  {
    type: "playstation",
    img: "https://m.media-amazon.com/images/I/71TNU43c6lL._AC_UY218_.jpg",
  },
  {
    type: "video games",
    img: "https://m.media-amazon.com/images/I/91KgYsQNJQL._AC_UY218_.jpg",
  },
  {
    type: "headsets",
    img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg",
  },
  {
    type: "keyboards",
    img: "https://m.media-amazon.com/images/I/71pPm31LFkS._AC_SX679_.jpg",
  },
  {
    type: "chairs",
    img: "https://m.media-amazon.com/images/I/71y8rPagzDL._AC_UL320_.jpg",
  },
  {
    type: "gaming mice",
    img: "https://m.media-amazon.com/images/I/611jbF+FbbL._AC_SL1500_.jpg",
  },
  {
    type: "apparel",
    img: "https://m.media-amazon.com/images/I/71NB1Z5wJ5S._AC_UL320_.jpg",
  },
  {
    type: "action figures",
    img: "https://m.media-amazon.com/images/I/71qddHX6kJL._AC_UL320_.jpg",
  },
  {
    type: "hats",
    img: "https://m.media-amazon.com/images/I/71qxdcNAY8L._AC_UL320_.jpg",
  },
  {
    type: "mugs",
    img: "https://m.media-amazon.com/images/I/71wVRz-t3sS._AC_UL320_.jpg",
  },
];
</script>
<template>
  <div class="bg-white p-1 md:p-3">
    <img
      class="w-full"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_LPHeader_Gamers_en_US.png"
      alt=""
    />
    <h2 class="text-center my-4 py-3 text-2xl font-bold">
      Featured Categories
    </h2>

    <div class="grid 
    gap-5 
    md:gap-[25px] 
    xl:gap-[35px] 
    grid-cols-1 
    sm:grid-cols-2
    md:grid-cols-3
    xl:grid-cols-5
    
    
    ">
      <nuxt-link
        v-for="item in gamingAccessories"
        :key="item.type"
        :to="`/products/${item.type}`"
        class="text-center flex flex-col justify-between"
      >
        <img
          :src="item.img"
          alt=""
          class="mx-auto max-w-[250px] max-h-[150px] my-auto"
        />
        <span class="mt-5 text-lg font-semibold block justify-self-end">{{
          item.type
        }}</span>
      </nuxt-link>
    </div>
  </div>
</template>


