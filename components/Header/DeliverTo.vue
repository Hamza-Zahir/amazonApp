<script setup>
const country = useState("Country"); 
const showDeliverToCard = useState("ShowDeliverToCard", () => false);
</script>
<template>
  <div class="">
    <div
      class="flex cursor-pointer p-1.5"
      @click="showDeliverToCard = !showDeliverToCard"
    >
      <Icon name="mingcute:location-line" class="text-2xl self-end mr-0.5" />
      <div class="flex md:flex-col w-full">
        <div class="text md:text-xs opacity-90 font-normal mr-1 whitespace-nowrap">Deliver to</div>
        <div class="font-bold md:text-sm truncate md:max-w-[90px]">
          {{ country }}
        </div>
      </div>
    </div>
  </div>
</template>
