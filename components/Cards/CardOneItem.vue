<script setup>
defineProps({
  cardInfo: {
    type: Object,
  },
});
</script>

<template>
   <div class="bg-white p-3.5 text-sm flex flex-col justify-between">
    <h2 class="text-xl lg:text-2xl font-bold mb-2">{{ cardInfo.title }}</h2>
    <NuxtLink class="w-full h-full" :to="`/${cardInfo.page}`">
      <img :src="cardInfo.img_sec" class="h-full w-full" alt="img not found" />
    </NuxtLink>
    <NuxtLink  class="
        w-fit
        my-4
        mx-2
        block
        text-blue-500
        hover:text-blue-700
      " :to="`/${cardInfo.page}`">
      {{ cardInfo.link }}
    </NuxtLink>
  </div>
</template>
