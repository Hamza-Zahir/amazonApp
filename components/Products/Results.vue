<script setup>
const country = useState("Country");

defineProps({
  product: {
    type: Object,
  },
});
</script>

<template>
  <div
    class="
    w-full
      flex
      my-3
      border border-gray-400
      ease-in-out
      duration-300
      hover:shadow-[0_0_5px_0px]
       
    "
  >
    <NuxtLink
      :to="`/product/${product._id}`"
      class="flex justify-center items-center w-1/4 bg-white p-3 border-r"
    >
      <img :src="product.imgUrl" class="max-w-full max-h-[220px]" alt="img" />
    </NuxtLink>

    <div class="w-3/4 p-4">
      <NuxtLink
        :to="`/product/${product._id}`"
        class="description hover:text-red-500"
      >
        {{ product.description }}
      </NuxtLink>
      <Stars :value="3.5" class="" />

      <div class="m-3">
        <span class="font-bold">
          <sup>$</sup> {{ product.currentPrice.toString().split(".")[0] }}
          <sup>{{ product.currentPrice.toString().split(".")[1] }}</sup>
        </span>

        <span class="text-gray-500 px-2">
          <del>
            <sub> {{ product.oldPrice ? `$ ${product.oldPrice}` : "" }} </sub>
          </del>
        </span>
      </div>
      <h6 class="text-sm text-gray-800">Ships to "<span class="font-bold text-green-600">{{ country }}</span>"</h6>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.description {
  overflow: hidden;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  letter-spacing: 0.2px;
}

</style>