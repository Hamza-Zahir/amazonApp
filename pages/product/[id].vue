<script setup>
const { getProductById, getProductsByType } = useProduct();
const route = useRoute();
const productId = route.params.id;
const product = ref(null);
const products = ref(null);
const loading = ref(false);
const Save = (old_price, current_price) => {
  const saved = old_price - current_price;
  return `$${saved.toFixed(2)} (${(saved / (old_price / 100)).toFixed(0)}%)`;
};
onMounted(async () => {
  try {
    loading.value = true;
    const _product = await getProductById(productId);
    product.value = _product;
    loading.value = false;
    const productType = _product.productType;
    products.value = await getProductsByType(productType);
    
  } catch (error) {
    throw error;
  }
});
</script>
<template>
  <div class="">
    <ProductHead v-if="products" :products="products" />
    <div v-if="loading && !product" class="mt-[25px]">
      <Loading />
    </div>
    <div v-if="product" class="bg-white p-2">
      <div class="product_Card font-medium py-4 flex f-full">
        <div class="hidden sm:block p-3 min-w-[35%] max-w-1/2">
          <img
            :src="product.imgUrl"
            class="min-w-[70%] max-w-full max-h-[500px] mx-auto"
            alt=""
          />
        </div>
        <div class="lg:flex p-2">
          <div class="text p-2">
            <div class="description border-b font-bold text-lg p-2">
              {{ product.description }}

              <div class="">
                <Stars :value="3.5" />
              </div>
            </div>
            <div class="sm:hidden my-3">
              <img :src="product.imgUrl" class="w-[75%] mx-auto" alt="" />
            </div>
            <!-- start  Price and  Saved -->
            <div class="flex p-3 text-lg font-semibold">
              <div class="text-right">
                <div v-if="product.oldPrice">List Price:</div>
                <div>Price:</div>
                <div v-if="product.oldPrice">You Save:</div>
              </div>
              <div class="ml-2">
                <div
                  v-if="product.oldPrice"
                  class="text-gray-400 line-through font-medium"
                >
                  {{ `$${product.oldPrice}` }}
                </div>
                <div class="text-green-600">
                  {{ `$${product.currentPrice}` }}
                </div>
                <div v-if="product.oldPrice" class="text-red-400">
                  {{ Save(product.oldPrice, product.currentPrice) }}
                </div>
              </div>
            </div>
            <!-- end  Price and  Saved -->

            <div class="xl:hidden">
              <ProductBuyBox
                :currentPrice="Number(product.currentPrice)"
                :productId="product._id"
              />
            </div>

            <div class="lg:border-t py-2">
              <h4 class="m-2 text-xl font-bold">About this product</h4>

              <ul class="pl-4 list-disc">
                <li class="my-2">
                  【RGB Mechanical Keyboard】The keyboard is mechanical
                  keyboard, all 35 keycap have RGB rainbow backlit function;
                  Letters never fade; all 35 keys are non-conflict keys,you can
                  press them at once.
                </li>
                <li class="my-2">
                  【Multiple RGB Backlit Modes】Fn+3: Brightness plus; Fn+4:
                  Brightness reduce; Fn+5: RGB, Red, orange, yellow, green,
                  blue, purple, white 7 colors switch; Fn+Tab: Light judgment
                  mode, raising mode, running mode, snowing mode,breathing mode.
                </li>
                <li class="my-2">
                  【Macro Recording & Deletion】G1,G2,G3,G4,G5,G6 macro
                  recording and deletion.Macro Record: If no recorded content in
                  G1, press FN+G1 to enter the recording state, when G1 light is
                  flashing, you can input the recording content, then press
                  FN+G1 again, the G1 light will return to the normal mode.
                  Deletion: press FN+G1 to clear the recording content, and
                  change it to F1 function. The G2 to G6 macro record and delete
                  function are same as G1.
                </li>
                <li class="my-2">
                  【Ergonomic Design】Curved keycap layout and ergonomic one
                  hand palm rest support provide comfortable playing game
                  experience. " W, S, A, D " key are up, down, left, right move
                  function, use texture design, enhanced fingers' touch feel
                  while playing games.
                </li>
                <li class="my-2">
                  【Applicable System】Compatible with Win 2000,Win XP,Win
                  ME,Win Vista, Win7, Win8, Win10, Linux. Work for PS4, Xbox
                  One, Laptop, PC Computer Game. USB Wired Connect, No software
                  required, just plug and play.
                </li>
              </ul>
            </div>
          </div>

          <div class="hidden xl:block min-w-[260px] max-w-full">
            <ProductBuyBox
              :currentPrice="Number(product.currentPrice)"
              :productId="product._id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
