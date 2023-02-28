<script setup>

defineProps({
  historyProducts: {
    type: Array,
  },
});
</script>
<template>
  <div class="bg-white overflow-hidden relative">
    <h4>
      <span class="sm-text-lg md:text-2xl font-bold"
        >Your Browsing History</span
      >
      <NuxtLink
        to="/history"
        class="whitespace-nowrap text-sm sm-text-md ml-2 text-blue-500 hover:text-blue-700"
      >
        <Icon name="material-symbols:chevron-right" class="text-lg" /> View or
        View or edit your browsing history
      </NuxtLink>
    </h4>

    <div
      class="content mt-5 w-full flex items-center overflow-x-auto scroll-smooth"
    >
      <NuxtLink
        v-for="product in historyProducts"
        :key="`history-${product._id}`"
        class="m-4"
        :to="`/product/${product._id}`"
      >
        <img :src="product.imgUrl" class="max-w-[200px] max-h-[150px]" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
    background: #4e4e4e94;
  }

  &::-webkit-scrollbar {
    height: 7px;
  }
}
</style>
