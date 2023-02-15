<script setup>

 defineProps({
  Error: {
    type: String,
  },
});
</script>

<template>
  <div
    class="my-4 p-4 border border-red-500 rounded shadow-[0_0_0px_1px] shadow-red-500 flex w-full"
  >
    <div class="mr-3">
      <Icon name="bx:bxs-error" class="text-red-500 text-4xl"></Icon>
    </div>
    <div class="">
      <div class="text-xl text-red-500 font-medium mb-2">
        There was a problem
      </div>
      <div class="">{{ Error }}</div>
    </div>
  </div>
</template>
