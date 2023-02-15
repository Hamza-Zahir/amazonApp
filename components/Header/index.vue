<script setup>
const showBrowserMenu = useState("ShowBrowserMenu");
const showDeliverToCard = useState("ShowDeliverToCard");
</script>

<template>
  <div class="overflow-x-clip overflow-y-visible relative">
    <div class="Header text-white z-30 px-3 py-1.5">
      <div class="flex justify-between items-center">
        <div
          class="pb-3 pr-2 md:hidden cursor-pointer"
          @click="showBrowserMenu = !showBrowserMenu"
        >
          <Icon name="ri:menu-line" class="text-3xl" />
        </div>

        <NuxtLink to="/" class="block h-7 min-w-fit">
          <img
            src="~/assets/images/amazonLogoWihte.png"
            alt=""
            class="block h-full min-w-32"
          />
        </NuxtLink>
        <div class="hidden md:block mr-3 ml-4 hoverLink whitespace-nowrap">
          <HeaderDeliverTo />
        </div>
        <div class="hidden lg:block w-full mr-3">
          <HeaderSearchComponent />
        </div>
        <div class="ml-auto self-stretch">
          <HeaderAccountBtn />
        </div>
        <div
          class="
            hidden
            md:flex
            cursor-pointer
            hoverLink
            ml-3
            p-1.5
            whitespace-nowrap
          "
        >
          <div class="flex flex-col w-full">
            <div class="text-xs opacity-90 font-normal">Returns</div>
            <span class="font-bold flex text-sm"> & Orders </span>
          </div>
        </div>
        <div class="flex jusyify-evenly items-center ml-2">
          <HeaderCartBtn />
        </div>
      </div>
      <div class="lg:hidden mt-1">
        <HeaderSearchComponent />
      </div>
    </div>
    <div class="bg-slate-800 text-white">
      <HeaderNavBar />
    </div>
    <div class="md:hidden bg-slate-600 text-white">
      <HeaderDeliverTo />
    </div>
    <div class="">
      <HeaderBrowserMenu />
    </div>
    <div class="md:hidden">
      <HeaderAccountMenu />
    </div>
    <div class="" v-if="showDeliverToCard">
      <HeaderDeliverToCard />
    </div>
  </div>
</template>
