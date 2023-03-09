<script setup>
const { loadUserCart } = useCart();
const isLoggedIn = useState("isLoggedIn");
const TotalPricesInCart = useState("TotalPricesInCart");
const TotalItemsInCart = useState("TotalItemsInCart");
const isGiftInCartItems = useState("isGiftInCartItems");
const userCart = useState("UserCart");
const userCartSaveForLater = useState("UserCartSaveForLater");

const savedItem = ref([]);
const savedForLater = ref(true);
const BuyItAgain = ref(false);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await loadUserCart();
  loading.value = false;
});
</script>

<template>
  <div class="p-2 lg:p-4">
    <div class="lg:flex flex-row-reverse gap-2 lg:gap-4 w-full">
      <div class="sidbar lg:w-1/3 xl:w-1/4">
        <div v-if="userCart.length">
          <div class="bg-white mb-3 p-4">
            <div class="text-lg font-medium">
              Subtotal ({{ TotalItemsInCart }} items):
              <span class="font-bold text-xl">
                <sup>$</sup>
                {{ TotalPricesInCart.toFixed(2) }}
              </span>
            </div>
            <div class="my-2">
              <input
                type="checkbox"
                :checked="isGiftInCartItems"
                @click="
                  (e) => {
                    e.preventDefault();
                  }
                "
              />
              <label class="ml-1">
                {{
                  isGiftInCartItems
                    ? "This order contains a gift"
                    : "This order does not contain a gift"
                }}
              </label>
            </div>
            <button
              class="bg-yellow-400 mt-3 w-full rounded-lg p-1.5 font-medium"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
        <div class="bg-white mb-3 p-4 border rounded-xl hidden lg:block">
          <h6 class="font-semibold text-lg">
            Products related to items in your cart
          </h6>
          <span class="text-xs">Sponsored</span>
        </div>
      </div>

      <div class="body lg:w-2/3 xl:w-3/4">
        <div v-if="loading" class="py-[25px] bg-white">
          <Loading />
        </div>
        <div v-else class="">
          <div v-if="userCart.length" class="bg-white p-4">
            <h4 class="font-bold text-2xl py-1.5">Shopping Cart</h4>
            <div class="border"></div>
            <div v-for="item in userCart" :key="item._id" class="">
              <CartShoppingCarCard v-if="userCart.length" :item="item" />
            </div>
            <div class="text-lg text-end font-bold mt-4">
              Subtotal ({{ TotalItemsInCart }} items):
              <span class="font-bold text-xl">
                <sup>$</sup>
                {{ TotalPricesInCart.toFixed(2) }}
              </span>
            </div>
          </div>
          <div v-else class="bg-white p-3">
            <div
              v-if="!isLoggedIn"
              class="sm:flex items-center gap-4 md:gap-[40px] lg:gap-[60px]"
            >
              <div class="w-full sm:w-8/12 md:w-7/12">
                <img
                  src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                  alt=""
                  class="w-full max-w-[300px] md:max-w-full mx-auto"
                />
              </div>
              <div class="w-full my-2">
                <h4
                  class="text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold p-2"
                >
                  Your Amazon Cart is empty
                </h4>
                <div class="text-sm md:text-md xl:text-lg">
                  <NuxtLink
                    to="/signIn"
                    class="bg-amber-400 border border-amber-500 rounded-md py-1 px-3 my-2 font-medium inline-block"
                  >
                    Sign in to your account
                  </NuxtLink>

                  <NuxtLink
                    to="/signUp"
                    class="bg-gray-100 border border-gray-200 rounded-md py-1 px-3 ml-2 my-2 font-medium whitespace-nowrap inline-block"
                  >
                    Sign up now
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div v-else class="">
              <h4 class="text-xl md:text-2xl lg:text-3xl font-semibold p-2">
                Your Amazon Cart is empty
              </h4>
              <p v-if="userCartSaveForLater.length" class="py-4 text-lg">
                Check your Saved for later items below or
                <NuxtLink
                  to="/"
                  class="text-blue-500 hover:text-orange-500 hover:underline"
                >
                  continue shopping </NuxtLink
                >.
              </p>
              <p v-else class="py-4 text-lg">
                Your Shopping Cart lives to serve. Give it purpose — fill it
                with groceries, clothing, household supplies, electronics, and
                more. Continue shopping on the
                <NuxtLink
                  to="/"
                  class="text-blue-500 hover:text-orange-500 hover:underline"
                >
                  Amazon homepage</NuxtLink
                >, learn about
                <NuxtLink
                  to="/"
                  class="text-blue-500 hover:text-orange-500 hover:underline"
                >
                  today's deals</NuxtLink
                >, or visit your
                <NuxtLink
                  to="/"
                  class="text-blue-500 hover:text-orange-500 hover:underline"
                >
                  Wish List</NuxtLink
                >.
              </p>
            </div>
          </div>
          <div v-if="isLoggedIn" class="bg-white p-3 mt-5">
            <h4 class="text-xl md:text-2xl lg:text-3xl font-bold p-2">
              Your Items
            </h4>
            <div class="flex text-sm text-blue-400 sm:px-5">
              <div
                class="cursor-pointer mr-2 py-2"
                :class="
                  savedForLater &&
                  'font-[700] text-black border-b border-red-800'
                "
                @click="
                  () => {
                    savedForLater = !savedForLater;
                    BuyItAgain = !BuyItAgain;
                  }
                "
              >
                {{
                  savedItem.length
                    ? `Saved for later (${savedItem.length} item)`
                    : "No items saved for later"
                }}
              </div>

              <div
                class="ml-2 cursor-pointer py-2"
                :class="
                  BuyItAgain && 'font-[700] text-black border-b border-red-800'
                "
                @click="
                  () => {
                    savedForLater = !savedForLater;
                    BuyItAgain = !BuyItAgain;
                  }
                "
              >
                Buy it again
              </div>
            </div>
            <div class="border-t py-4">
              <div v-if="savedForLater" class="my-3">
                <div class="flex flex-wrap justify-center sm:justify-start" v-if="userCartSaveForLater.length">
                 
                    <CartSaveForLaterCart v-for="item in userCartSaveForLater"
                    :key="item._id" :item="item" />
                 
                  
                </div>
              </div>
              <div v-if="BuyItAgain" class="">No items to Buy again.</div>
            </div>
          </div>
        </div>
        <div class="text-xs p-3">
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Shopping Cart
          <NuxtLink to="/cart" class="text-blue-500 whitespace-nowrap">
            Learn more </NuxtLink
          >. Do you have a gift card or promotional code? We'll ask you to enter
          your claim code when it's time to pay.
        </div>
      </div>
    </div>
  </div>
</template>
