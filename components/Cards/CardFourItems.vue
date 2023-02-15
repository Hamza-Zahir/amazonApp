<script setup>
defineProps({
  cardInfo: {
    type: Object,
  },
});
</script>

<template>
  <div class="bg-white p-3.5 text-sm flex flex-col justify-between">
    <h2 class="text-xl lg:text-2xl font-bold text-start mb-2">
      {{ cardInfo.title }}
    </h2>
    <div class="w-full flex flex-wrap">
      <NuxtLink
        :to="cardInfo.productType1"
        class="
          text-black
          p-2
          w-1/2
          overflow-hidden
          flex flex-col
          justify-evenly
        "
        
      >
        <img
          :src="cardInfo.img1"
          class="max-w-full max-h-[120px] mx-auto"
          alt="img not found"
        />
        <span class="text-xs xl:text-sm mt-2">{{ cardInfo.title1 }}</span>
      </NuxtLink>

      <NuxtLink
               :to="cardInfo.productType2"
 class="
          text-black
          p-2
          w-1/2
          overflow-hidden
          flex flex-col
          justify-evenly
        "
      >
        <img
          :src="cardInfo.img2"
          class="max-w-full max-h-[120px] mx-auto"
          alt="img not found"
        />
        <span class="text-xs xl:text-sm mt-2">{{ cardInfo.title2 }}</span>
      </NuxtLink>
      <NuxtLink
               :to="cardInfo.productType3"
 class="
          text-black
          w-1/2
          p-2
          overflow-hidden
          flex flex-col
          justify-evenly
        "
      >
        <img
          :src="cardInfo.img3"
          class="max-w-full max-h-[120px] mx-auto"
          alt="img not found"
        />
        <span class="text-xs xl:text-sm mt-2">{{ cardInfo.title3 }}</span>
      </NuxtLink>
      <NuxtLink
             :to="cardInfo.productType4"
   class="
          text-black
          p-2
          w-1/2
          overflow-hidden
          flex flex-col
          justify-evenly
        "
      >
        <img
          :src="cardInfo.img4"
          class="max-w-full max-h-[120px] mx-auto"
          alt="img not found"
        />
        <span class="text-xs xl:text-sm mt-2">{{ cardInfo.title4 }}</span>
      </NuxtLink>
    </div>

    <NuxtLink
      :to="cardInfo.page"
      class="w-fit my-4 mx-2 block text-blue-500 hover:text-blue-700"
    >
      {{ cardInfo.link }}
    </NuxtLink>
  </div>
</template>
