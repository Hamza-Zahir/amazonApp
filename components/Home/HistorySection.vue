<script setup>
const isLoggedIn = useState("isLoggedIn");

const fitnessProducts = []; 
</script>

<template>
  <div v-if="isLoggedIn">
    <div class="bg-white p-[15px] xl:p-[20px] xl:pt-[50px]">
    <div class="border rounded-md p-5">
      
        <div
          v-if="!fitnessProducts.length"
          class="py-5 flex justify-between items-center flex-wrap"
        >
          After viewing product detail pages, look here to find an easy way to
          navigate back to pages you are interested in.

          <NuxtLink
            to="/history"
            class="
              whitespace-nowrap
              text-sm
              sm-text-md
              m-2
              text-blue-500
              hover:text-blue-700
            "
          >
            <Icon name="material-symbols:chevron-right" class="text-lg" /> View
            or edit your browsing history
          </NuxtLink>
        </div>
        <HomeCardsHistoryCard v-else :historyProducts="fitnessProducts" />
      </div>

    </div>
  </div>
</template>
