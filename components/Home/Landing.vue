<script setup>
const images = ref([
  "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
]);
</script>

<template>
  <div
    id="carouselExampleControls"
    class="carousel slide relative"
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
        z-[-1]
      "
    >
      <div
        v-for="(img, i) in images"
        :key="`img-${i + 1}`"
        class="carousel-item relative float-left w-full"
        :class="i === 0 ? 'active' : ''"
      >
        <img :src="img" class="block w-full h-full" alt="Wild Landscape" />
      </div>
    </div>
    <button
      class="
        carousel-control-prev
        absolute
        top-0
        bottom-0
        flex
        justify-center
        p-0
        text-center
        border-0
        hover:outline-none hover:no-underline
        focus:outline-none focus:no-underline
        left-0
      "
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat mt-[50%]"
        aria-hidden="true"
      ></span>
    </button>
    <button
      class="
        carousel-control-next
        absolute
        top-0
        bottom-0
        flex
        justify-center
        p-0
        text-center
        border-0
        hover:outline-none hover:no-underline
        focus:outline-none focus:no-underline
        right-0
      "
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat mt-[50%]"
        aria-hidden="true"
      ></span>
    </button>
  </div>
</template>
<style scoped>
img {
  mask: linear-gradient(to bottom, black, #0000002a);
}
</style>
