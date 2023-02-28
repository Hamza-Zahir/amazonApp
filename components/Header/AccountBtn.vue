<script setup>
const userName = useState("UserName");
const isLoggedIn = useState("isLoggedIn");

const showAccountMenu = useState("ShowAccountMenu", () => false);
</script>
<template>
  <div
    class="hidden md:block relative"
    @mouseleave="showAccountMenu = false"
    @mouseenter="showAccountMenu = true"
  >
    <div class="hidde md:bloc cursor-pointer hoverLink p-1.5 whitespace-nowrap">
      <div class="flex flex-col w-full">
        <div class="text-xs opacity-90 font-normal truncate max-w-[110px]">
          Hello, {{ isLoggedIn ? userName : " sign in" }}
        </div>
        <div class="font-bold flex text-sm">
          Account & Lists
          <Icon
            name="material-symbols:arrow-drop-down"
            class="text-xl self-end"
          />
        </div>
      </div>
    </div>
    <div v-if="showAccountMenu" class="hidden md:block">
      <HeaderAccountMenu />
    </div>
  </div>
  <!-- .... small devices ..... -->
  <div
    class="
      flex
      md:hidden
      cursor-pointer
      hoverLink
      p-1.5
      h-full
      items-center
      whitespace-nowrap
      ml-2
    "
    @click="showAccountMenu = !showAccountMenu"
  >
  
    <div class="hidden sm:block text-xl opacity-90 font-normal mr-2">
      <span v-if="isLoggedIn" class="text-sm truncate max-w-[120px] block">{{
        userName
      }}</span>
      <NuxtLink v-else to="/signIn">sign in</NuxtLink>
    </div>
    <Icon name="ooui:user-avatar-outline" class="text-2xl mb-2" />
  </div>
</template>
