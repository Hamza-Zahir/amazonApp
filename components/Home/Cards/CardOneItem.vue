<script setup>
defineProps({
  cardInfo: {
    type: Object,
  },
});
</script>

<template>
   <div class="bg-white p-3.5 text-sm flex flex-col justify-between max-w-[430px] mx-auto">
    <h2 class="lg:text-2xl font-bold mb-2">{{ cardInfo.title }}</h2>
    <NuxtLink :to="`${cardInfo.page}`" class="w-full h-full">
      <img :src="cardInfo.img_sec" class="h-full w-full" alt="img not found" />
    </NuxtLink>
    <NuxtLink :to="`${cardInfo.page}`" class="
        w-fit
        my-4
        mx-2
        block
        text-blue-500
        hover:text-blue-700
      " >
      {{ cardInfo.link }}
    </NuxtLink>
  </div>
</template>
