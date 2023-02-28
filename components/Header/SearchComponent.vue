<script setup>
import productsType from "~/json/productsType.json";
const ProductsTypes = ref("");
</script>

<template>
  <div class="bg-white h-10 flex items-center rounded-md text-black">
    <select
      class="bg-stone-200  max-w-[90px] xl:max-w-fit h-full rounded-l-md outline-none p-2 text-sm"
      :v-model="ProductsTypes"
    >
      <option value="All">All</option>
      <option
        v-for="productType in productsType"
        :key="productType"
        value="productType"
      >
        {{ productType }}
      </option>
    </select>

    <input
      class="w-full h-full border-none outline-none p-2"
      type="text"
      placeholder="Search Amazon"
    />
    <Icon
      name="mingcute:search-line"
      class="w-12 h-full rounded-md bg-orange-400 text-black cursor-pointer p-2"
    />
  </div>
</template>
