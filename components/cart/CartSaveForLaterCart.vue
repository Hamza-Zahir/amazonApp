<script setup>
const props = defineProps({
  item: {
    required: true,
    type: Object,
  },
});
const { DeleteFromSaveForLater, MoveToCart, loadUserCart } = useCart();

const { _id, quantity, isGift, product } = props.item;

const removeItem = async () => {
  try {
    const res = await DeleteFromSaveForLater(_id);
    if (res) {
      await loadUserCart();
    }
  } catch (error) {
    throw error;
  }
};

const MoveItemToCart = async () => {
  try {
    const res = await MoveToCart(_id);
    if (res) {
      await loadUserCart();
    }
  } catch (error) {
    throw error;
  }
};
// 



</script>

<template>
  <div class="border rounded-xl p-3 m-3 w-[240px] flex flex-col justify-between">
    <NuxtLink :to="`/product/${product._id}`" class="w-full h-full flex items-center justify-center">
      <img
        :src="product.imgUrl"
        alt="img"
        class="max-w-full max-h-[170px]"
      />
    </NuxtLink>
    <div class="my-2">
      <NuxtLink
        :to="`/product/${product._id}`"
        class="hover:underline hover:text-blue-600 description"
      >
        {{ product.description }}
      </NuxtLink>

      <div class="my-3">
        <span class="font-bold">
          <sup>$</sup>
          <span class="px-0.5 text-lg">
            {{ product.currentPrice.toString().split(".")[0] }}
          </span>
          <sup>
            {{ product.currentPrice.toString().split(".")[1] }}
          </sup>
        </span>
      </div>

      <h4 class="text-green-600 font-bold my-2">In Stock</h4>
      <div
        class="my-1 p-1 rounded-md text-center bg-gray-100 font-bold text-gray-700 border cursor-pointer"
        @click="MoveItemToCart"
        >
        Move To Cart
      </div>

      <div
        class="text-blue-400 hover:text-blue-500 cursor-pointer mt-3"
        @click="removeItem"
      >
        Delete
      </div>
    </div>
  </div>
</template>

<style scoped>
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
