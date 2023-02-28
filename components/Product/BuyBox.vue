<script setup>
const Country = useState("Country");
const showDeliverToCard = useState("ShowDeliverToCard");
const { addItemToDB } = useCart();
const quantity = ref(1);
const isGift = ref(false);

const { productId } = defineProps({
  currentPrice: {
    required: true,
    type: Number,
  },
  productId: {
    required: true,
    type: String,
  },
});
const oneDayaInMillisecond = 86400000;
const minDeliveryDate = +new Date() + 7 * oneDayaInMillisecond;
const minDeliveryDay = new Date(minDeliveryDate).getDate();
const minDeliveryMonth = new Date(minDeliveryDate).toLocaleString("en-us", {
  month: "short",
});
const maxDeliveryDate = +new Date() + 14 * oneDayaInMillisecond;
const maxDeliveryDay = new Date(maxDeliveryDate).getDate();
const maxDeliveryMonth = new Date(maxDeliveryDate).toLocaleString("en-us", {
  month: "short",
});

const addItemToCart = async () => {
  try {
    await addItemToDB({
      quantity: quantity.value,
      isGift: isGift.value,
      productId,
    });
    navigateTo("/cart");
  } catch (error) {
    throw error;
  }
};
</script>

<template>
  <div class="border bg-gray-50 rounded-xl p-3">
    <div class="text-red-600">${{ currentPrice }}</div>

    <ProductShippingDetails :price="currentPrice" />

    <div class="my-2 lg:text-sm">
      Delivery
      <span class="font-[600]">
        {{ minDeliveryMonth }}
        {{
          minDeliveryDay.toString().length > 1
            ? minDeliveryDay
            : `0${minDeliveryDay}`
        }}
        -
        {{ minDeliveryMonth !== maxDeliveryMonth ? maxDeliveryMonth : "" }}
        {{
          maxDeliveryDay.toString().length > 1
            ? maxDeliveryDay
            : `0${maxDeliveryDay}`
        }}
      </span>
    </div>

    <div
      class="Location text-sm text-blue-600 cursor-pointer"
      @click="showDeliverToCard = true"
    >
      <Icon
        name="mingcute:location-line"
        class="text-lg text-black pb-1 m-0"
      />Deliver to "{{ Country }}"
    </div>
    <h4 class="text-green-700 my-2 text-lg font-semibold">In Stock.</h4>

    <div class="my-4 px-2 bg-blue-200 relative w-fit rounded-xl z-0">
      Qty:

      <select
        class="bg-blue-200 outline-none w-[90px] h-full text-end absolute z-[-1] left-0 rounded-xl"
        v-model="quantity"
      >
        <option v-for="i in 30" :key="i" :value="i" class="bg-white">
          {{ i }}
        </option>
      </select>
    </div>

    <div class="text-sm flex items-start">
      <input
        type="checkbox"
        name=""
        id="isGift"
        class="mr-1 mt-1"
        v-model="isGift"
      />

      <label for="isGift" class="cursor-pointer"
        >Add a gift receipt for easy returns
      </label>
    </div>

    <button
      class="block w-[90%] my-3 mx-auto font-semibold rounded-xl p-1.5 bg-yellow-400"
      @click="addItemToCart"
    >
      Add to card
    </button>
    <button
      class="block w-[90%] my-3 mx-auto font-semibold rounded-xl p-1.5 bg-amber-600"
    >
      Buy Now
    </button>
  </div>
</template>

