<script setup>
const Country = useState("Country");
const showDetailsCard = ref(false);
const props = defineProps({
  price: {
    required: true,
    type: Number,
  },
});

const TwentyPercentOfPrice = (props.price / 100) * 20;
const fourtyPercentOfPrice = (props.price / 100) * 40;
const minAmazonGlobalShipping = 30.0;

const AmazonGlobalShipping = minAmazonGlobalShipping + TwentyPercentOfPrice;
const FeesDeposit = props.price >= 100 ? fourtyPercentOfPrice : 0;

const ShippingAndFeesDeposit = FeesDeposit + AmazonGlobalShipping;
const totalPrice = FeesDeposit + AmazonGlobalShipping + props.price;
</script>
<template>
  <div
    v-if="showDetailsCard"
    @click="showDetailsCard = false"
    class="fixed w-full h-full top-0 left-0 z-40"
  ></div>
  <div class="lg:text-sm my-2 relative w-full">
    <div class="text-gray-700">
      <span v-if="FeesDeposit">
        <b class="font-bold text-black">
          ${{ ShippingAndFeesDeposit.toFixed(2) }}</b
        >
        Shipping & Import Fees Deposit
      </span>
      <span v-else
        >No Import Fees Deposit &
        <b class="font-bold text-black">
          ${{ AmazonGlobalShipping.toFixed(2) }}
        </b>
        Shipping</span
      >
      to "{{ Country }}"

      <div
        class="whitespace-nowrap cursor-pointer text-blue-600 inline-block hover:text-red-500"
        @click="showDetailsCard = true"
      >
        Details
        <Icon name="material-symbols:arrow-drop-down" class="text-xl" />
      </div>
      <div
        v-if="showDetailsCard"
        class="rounded border bg-white text-sm absolute right-0 top-full z-50 h-fit w-full min-w-fit lg:whitespace-nowrap shadow-[0_0_7px_0]"
      >
        <h6
          class="border-b md:text-lg p-2 font-semibold flex gap-10 justify-between bg-gray-200"
        >
          <span>Shipping & Fee Details</span>
          <Icon
            name="iwwa:delete"
            class="text-2xl cursor-pointer"
            @click="showDetailsCard = false"
          />
        </h6>
        <div class="p-2 text-gray-600">
          <div class="flex gap-10 justify-between my-1">
            Price <span class="font-bold text-green-600">${{ price }} </span>
          </div>
          <div class="flex gap-10 justify-between my-1">
            AmazonGlobal Shipping
            <span class="font-bold"
              >${{ AmazonGlobalShipping.toFixed(2) }}</span
            >
          </div>

          <a
            class="flex justify-between text-blue-600 hover:underline my-1 gap-10"
            href="https://www.amazon.com/gp/help/customer/display.html?ie=UTF8&pop-up=1&nodeId=201117970&ref=amazon_global_shipmsg_viewed_help"
            target="_blank"
          >
            Estimated Import Fees Deposit
            <span class="font-bold">${{ FeesDeposit.toFixed(2) }} </span>
          </a>
          <div class="border"></div>
          <div class="flex gap-10 justify-between mt-2 font-bold text-lg px-2">
            Total
            <span class=""> $ {{ totalPrice.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

