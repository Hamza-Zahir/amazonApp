<script setup>

const images = ref([
  "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
]);

const currentSlide = ref(0);
const slideInterval = ref(null);

onMounted(() => {
  slideInterval.value = setInterval(() => {
    currentSlide.value < images.value.length - 1
      ? currentSlide.value++
      : (currentSlide.value = 0);
  }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(slideInterval.value);
});
</script>

<template>
  <div
    id="carouselExampleControls"
    class="carousel slide carousel-dark relative"
    data-bs-ride="carousel"
  >
    <div
      class="
        carousel-inner
        relative
        w-full
        overflow-hidden
        min-h-[200px]
        max-h-[300px]
        mb-[-120px]
        xl:mb-[-80px]
      "
    >
      <div
        v-for="(img, index) in images"
        :key="`img-${index + 1}`"
        class="
          carousel-item
          transition-all
          duration-[3s]
          relative
          float-left
          w-full
        "
        :class="index === currentSlide ? 'active' : ''"
      >
        <img :src="img" class="block w-full h-full" alt="Wild Landscape" />
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  mask: linear-gradient(to bottom, black, #0000002a);
}
</style>
