<script setup>
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide } from "vue3-carousel";
const currentSlide = ref(0);
const props = defineProps({
  products: Array,
});

const { products } = toRefs(props);

const slideInterval = ref(null);

onMounted(() => {
  slideInterval.value = setInterval(() => {
    currentSlide.value < products.value.length - 1
      ? currentSlide.value++
      : (currentSlide.value = 0);
  }, 4000);
});

onBeforeUnmount(() => {
  clearInterval(slideInterval.value);
});
</script>

<template>
  <div
    id="carouselExampleCrossfade"
    class="carousel slide carousel-fade relative bg-gray-300 py-1 h-[60px] px-4"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner mx-auto max-w-[600px] h-full">
      <div
        v-for="(product, index) in products"
        :key="product._id"
        class="carousel-item float-left w-full h-full text-xs"
        :class="index == currentSlide && 'active'"
      >
        <NuxtLink
          :to="`/product/${product._id}`"
          class="flex justify-center items-center max-w-[600px] h-full mx-auto"
        >
          <div class="h-full">
            <div
              class="img w-[130px] h-full bg-white flex items-center justify-center px-[27px] py-1"
            >
              <img :src="product.imgUrl" class="max-h-full max-w-full" alt="" />
            </div>
          </div>
          <div
            class="text mx-1 text-ellipsis whitespace-nowrap w-full overflow-hidden"
          >
            {{ product.description }}
          </div>
          <div class="text-center">
            <Stars :value="3.5" class="text-xs" />
            <div class="mt-1"><sup>$</sup> {{ product.currentPrice }}</div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.img {
  clip-path: polygon(0% 100%, 30px 0, 100% 0, 100px 100%) !important;
}
</style>
