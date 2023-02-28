<script setup>
// const numberOfAllitems = ref("99");
const TotalItemsInCart =  useState("TotalItemsInCart");

</script>
<template>
  <nuxt-link
    to="/cart"
    class="no-underline hoverLink p-1.5 self-stretc h-full block"
  >
    <div class="flex h-full">
      <div class="text-sm opacity-90 relative w-12 h-9 text-center option_one">
        <img
          src="~/assets/images/basskit.png"
          alt=""
          class="w-full h-full absolute inset-0"
        />
        <span class="h5 font-black text-orange-400 absolute inset-0 pl-1 text-sm">
          <span v-if="TotalItemsInCart < 99">{{TotalItemsInCart}}</span>
          <span v-else><sup>+</sup>99</span>
        </span>
      </div>
      <span class="self-end hidden sm:block font-bold">Cart </span>
    </div>
  </nuxt-link>
</template>
