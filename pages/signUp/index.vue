<script setup>
definePageMeta({ layout: "custom" });
useHead({
  title: "Amazon Registration",
});
const signUpError = useState("SignUpError", () => "");


</script>
<template>
  <div class="bg-wihte p-4">
    <div class="w-fit mx-auto">
      <NuxtLink to="/" class="block w-fit mx-auto">
        <img
          src="~/assets/images/amazonLogBlack.png"
          alt=""
          class="block h-full w-44"
        />
      </NuxtLink>
      <ErrorCard v-if="signUpError" :Error="signUpError"/>
      <SignUpForm />
    </div>
  </div>
</template>
