
<script setup>
const { modifyIsGift, modifyQuantity, loadUserCart, deleteItem, AddToSaveForLater } = useCart();
const props = defineProps({
  item: {
    required: true,
    type: Object,
  },
});

const { _id, quantity, isGift, product } = props.item;
const is_gift = ref(isGift);

const changeQuantity = async (Quantity) => {
  try {
    const res = await modifyQuantity(_id, Quantity);
    if (res) {
      await loadUserCart();
    }
  } catch (error) {
    console.log(error);
  }
};
const changeIsGift = async () => {
  try {
    const res = await modifyIsGift(_id, !is_gift.value);
    if (res) {
      await loadUserCart();

    }
  } catch (error) {
    console.log(error);
  }
};
const removeItem = async () => {
  try {
    const res = await deleteItem(_id);
    if (res) {
      await loadUserCart();

    }
  } catch (error) {
    throw error

  }
};
const saveForLater = async () => {
  try {
    const res = await AddToSaveForLater(_id);
    if (res) {
      await loadUserCart();

    }
  } catch (error) {
    throw error
  }
};
//  AddToSaveForLater
</script>

<template>
  <div class="border-b my-4">
    <div class="py-1 sm:flex">
      <NuxtLink
        :to="`/product/${product._id}`"
        class="w-full sm:w-1/3 md:w-1/4 xl:w-1/5 p-2 flex justify-center items-center"
      >
        <img :src="product.imgUrl" alt="img" class="max-w-full max-h-[170px]" />
      </NuxtLink>
      <div class="p-2 sm:w-2/3 md:w-3/4 xl:w-4/5">
        <div class="md:flex gap-5 justify-between">
          <NuxtLink
            :to="`/product/${product._id}`"
            class="hover:underline hover:text-blue-600 description"
          >
            {{ product.description }}
          </NuxtLink>

          <div class="mt-2 md:mt-0 ml-3">
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
        </div>

        <h4 class="text-green-600 text-lg font-bold mt-2">In Stock</h4>
        <div class="text-xs mt-2">
          <input
            type="checkbox"
            :id="_id"
            :checked="is_gift"
            @change="changeIsGift"
          />
          <label :for="_id" class="mx-1">This is a gift</label>
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ord_cart_shr?pop-up=1&nodeId=759346"
            target="_blank"
            class="text-blue-500"
            >Learn more</a
          >
        </div>
        <div class="flex items-center">
          <div class="w-[100px]">
            <div class="my-4 px-2 bg-blue-200 relative w-fit rounded-xl z-0">
              Qty:

              <select
                class="bg-blue-200 outline-none w-[90px] h-full text-end absolute z-[-1] left-0 rounded-xl"
                @change="
                  (e) => {
                    changeQuantity(e.target.value);
                  }
                "
              >
                <option hidden>{{ quantity }}</option>
                <option v-for="i in 30" :key="i" :value="i" class="bg-white">
                  {{ i }}
                </option>
              </select>
            </div>
          </div>
          <div class="opacity-50 mx-2">|</div>
          <div class="cursor-pointer text-blue-500 text-sm  hover:underline hover:text-blue-700" @click="removeItem">Delet</div>
          <div class="opacity-50 mx-2">|</div>
          <div class="cursor-pointer text-blue-500 text-sm hover:underline hover:text-blue-700" @click="saveForLater">Save For Later</div>
        </div>
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
