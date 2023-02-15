<script setup>
const props = defineProps({
  Links: {
    type: Object,
  },
});
const showBrowserMenu = useState("ShowBrowserMenu");
const accessedLinks = useState("AccessedLinks", () => null);
</script>
<template>
  <div class="p-3">
    <div
      class="p-1"
      v-for="(links, LinksTitle) in Links"
      :key="`title-${LinksTitle}`"
    >
      <div class="text-xl font-extrabold">{{ LinksTitle }}</div>
      <NuxtLink
        to="/"
        @click="
          () => {
            showBrowserMenu = !showBrowserMenu;
            accessedLinks = null;
          }
        "
        class="block p-2 m-1 font-medium hover:bg-gray-100 cursor-pointer"
        v-for="linkDesc in links"
        :key="`link-${linkDesc}`"
        >{{ linkDesc }}</NuxtLink
      >
    </div>
  </div>
</template>
