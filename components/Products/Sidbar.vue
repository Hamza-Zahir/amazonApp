<script setup>
import productsType from "~/json/productsType.json";
</script>

<template>
  <div class="">
    <div class="Department">
      <h4 class="text-xl font-bold">Department</h4>
      <ul class="m-0 p-0 ps-1">
        <li v-for="(type, i) in productsType" :key="`prodact-${i + 1}`">
          <span class="fw-bold">
            <Icon name="material-symbols:chevron-right" class="text-lg" />
          </span>
          {{ type }}
        </li>
      </ul>
    </div>
    <div class="Customer_Review my-2">
      <h4 class="text-xl font-bold">Customer Review</h4>

      <div class="flex flex-col-reverse">
        <div v-for="x in 10" :key="`star-${x}`" class="cursor-pointer  whitespace-nowrap">
          <Stars :value="x / 2" />
          & Up
        </div>
      </div>
    </div>

    <div class="Price my-2">
      <h4 class="text-xl font-bold">Price</h4>
      <ul class="m-0 p-0 ps-1">
        <li>Under <span class="font-bold">$25</span></li>
        <li>
          <span class="font-bold">$25</span> to
          <span class="font-bold">$50</span>
        </li>
        <li>
          <span class="font-bold">$50</span> to
          <span class="font-bold">$100</span>
        </li>
        <li>
          <span class="font-bold">$100</span> to
          <span class="font-bold">$200</span>
        </li>
        <li><span class="font-bold">$200</span> & Above</li>
      </ul>
    </div>
  </div>
</template>

