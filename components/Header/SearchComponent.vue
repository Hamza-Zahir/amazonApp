<script setup>
import Options from "~/json/Options.json";
const showProductsTypes = ref(false);
const ProductsTypes = ref("ALL");
</script>

<template>
  <div class="bg-white h-10 flex items-center rounded-md text-black">
    <div
      class="flex min-w-fit cursor-pointer text-gray-900 hover:bg-zinc-300 bg-zinc-200 px-1 h-full relative items-center rounded-md"
      @click="showProductsTypes =!showProductsTypes"
      >
      <div class="px-1 text-xs min-w-fit">{{ProductsTypes}}</div>
      <Icon name="material-symbols:arrow-drop-down" class="" />

      <ul
        v-if="showProductsTypes"
        class="absolute top-full left-0 bg-gray-100 z-50 rounded py-2 max-h-80 overflow-y-scroll "
      >
        <li
          v-for="option in Options"
          :key="option.id"
          class="hover:bg-sky-400 whitespace-nowrap p-0.5 px-2 text-neutral-700"
          @click="ProductsTypes = option.option"
        >
        {{ option.option }}
          
        </li>
      </ul>
    </div>
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
