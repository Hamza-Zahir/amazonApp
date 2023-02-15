<script setup>
defineProps({
  dataCard: {
    type: Object,
  },
});
</script>
<template>
  <div class="Card_scroll bg-white p-4 overflow-hidden relative">
    <h4>
      <span class="text-xl md:text-2xl font-bold">{{ dataCard.title }}</span>
      <NuxtLink
        :to="`/products/${dataCard.productType}`"
        class="text-blue-500 hover:text-blue-700"
      >
        See more
      </NuxtLink>
    </h4>

    <div
      class="content w-full flex items-center overflow-x-scroll scroll-smooth"
    >
      <div
        class="
          btn_scrol
          text-xl
          font-bold
          w-[40px]
          h-[30%]
          flex
          items-center
          justify-center
          bg-white
          absolute
          z-20
          opacity-30
          cursor-pointer
          shadow-[0_0_5px_0px]
          right-0
          rounded-l-md
        "
        @click="
          (e) => {
            // 4* 3.6
            const parent = e.target.parentElement;
            parent.scrollLeft += (parent.offsetWidth / 10) * 8;
          }
        "
      >
        &gt;
      </div>
      <div
        class="
          btn_scrol
          text-xl
          font-bold
          w-[40px]
          h-[30%]
          flex
          items-center
          justify-center
          bg-white
          absolute
          z-20
          opacity-30
          cursor-pointer
          shadow-[0_0_5px_0px]
          left-0
          rounded-r-md
        "
        @click="
          (e) => {
            const parent = e.target.parentElement;
            parent.scrollLeft -= (parent.offsetWidth / 10) * 8;
          }
        "
      >
        &lt;
      </div>
      <NuxtLink
        v-for="item in dataCard.items"
        :key="item.creator"
        class="m-2.5"
        :to="`/product/${item.creator}`"
      >
        <img :src="item.imgUrl" class="max-w-[250px] max-h-[200px]" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Card_scroll {
  .content {
    &::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      -ms-border-radius: 10px;
      -o-border-radius: 10px;
      border-radius: 10px;
      background: #b4b4b449;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgb(97, 96, 96);
    }

    &::-webkit-scrollbar {
      height: 7px;
    }
  }

  &:hover {
    .btn_scrol {
      opacity: 0.6;
    }
    ::-webkit-scrollbar-thumb {
      background: #acacac;
    }
  }
}
</style>
