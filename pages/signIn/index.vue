<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});
useHead({
  title: "Amazon Sign-In",
});
const userEmail = useState("UserEmail");
const signInError = useState("SignInError", () => "");
</script>
<template>
  <div class="bg-wihte p-4">
    <div class="max-w-[360px] sm:min-w-[380px] mx-auto">
      <NuxtLink to="/" class="block w-fit mx-auto">
        <img
          src="~/assets/images/amazonLogBlack.png"
          alt=""
          class="block h-full w-44"
        />
      </NuxtLink>
      <ErrorCard v-if="signInError" :Error="signInError" />
      <div class="" v-if="!userEmail">
        <SignInEmailForm />

        <div>
          <div class="flex items-center text-gray-500 text-sm">
            <div class="border grow h-0"></div>
            <div class="grow-0 mx-2">New to Amazon?</div>
            <div class="border grow h-0"></div>
          </div>

          <NuxtLink
            to="/signUp"
            class="bg-neutral-300 my-5 w-full block text-center p-1.5 border border-gray-400 rounded-md border hover:bg-neutral-400"
            >Create your Amazon account
          </NuxtLink>
        </div>
      </div>

      <SignInPasswordForm v-else />
    </div>
  </div>
</template>
