<script setup>
const isLoggedIn = useState("isLoggedIn");
</script>

<template>
  <div class="">
    <div class="bg-gray-900">
      <Header class="max-w-screen-2xl mx-auto my-0" />
    </div>

    <div class="max-w-screen-2xl mx-auto my-0 min-h-[80vh]">
      <slot />
    </div>
    <SignInSection v-if="!isLoggedIn" />
  </div>
</template>

