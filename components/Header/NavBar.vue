<script setup>
const showBrowserMenu = useState("ShowBrowserMenu");
</script>

<template>
<!--   snap-mandatory -->
  <div
    class="NavBar flex items-center p-0.5 overflow-x-auto flex-nowrap whitespace-nowrap scrollbar-hide"
  >
    <div class="hidden md:flex cursor-pointer items-center hoverLink p-1.5" @click="showBrowserMenu = !showBrowserMenu">
      <Icon name="ri:menu-line" class="text-xl mr-1" />
      All
    </div>
    <NuxtLink to="/" class="hoverLink mx-0.5 p-1.5">Today's Deals</NuxtLink>
    <NuxtLink to="/" class="hoverLink mx-0.5 p-1.5">Customer Service</NuxtLink>
    <NuxtLink to="/" class="hoverLink mx-0.5 p-1.5">Registry</NuxtLink>
    <NuxtLink to="/" class="hoverLink mx-0.5 p-1.5">Gift</NuxtLink>
    <NuxtLink to="/" class="hoverLink mx-0.5 p-1.5">Sell</NuxtLink>

   
    
  </div>
</template>

