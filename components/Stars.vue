<script setup>
defineProps({
  value: {
    type: Number,
  },
});
</script>
<template>
  <span class="text-2xl whitespace-nowrap text-orange-500">
    <span v-if="value >= 5">
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star"
    /></span>
    <span v-else-if="value >= 4.5 && value < 5">
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star-half" />
    </span>
    <span v-else-if="value >= 4 && value < 4.5">
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star-border" />
    </span>
    <span v-else-if="value >= 3.5 && value < 4">
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star-half" />
      <Icon name="ic:outline-star-border" />
    </span>
    <span v-else-if="value >= 3 && value < 3.5">
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
    </span>
    <span v-else-if="value >= 2.5 && value < 3">
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star-half" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
    </span>
    <span v-else-if="value >= 2 && value < 2.5">
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
    </span>
    <span v-else-if="value >= 1.5 && value < 2">
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star-half" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
    </span>
    <span v-else-if="value >= 1 && value < 1.5">
      <Icon name="ic:outline-star" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
    </span>
    <span v-else-if="value > 0 && value < 1">
      <Icon name="ic:outline-star-half" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
    </span>
    <span v-else-if="value == 0">
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
      <Icon name="ic:outline-star-border" />
    </span>
  </span>
</template>



