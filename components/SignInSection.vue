<template>
    <div class="bg-white py-[40px] ">
        <div class="text-center mt-3 text-sm">
          See personalized recommendations
          <div class="mt-2">
            <NuxtLink
              to="/signIn"
              class="
                bg-amber-400
                border-2 border-amber-500
                rounded
                block
                max-w-[250px]
                py-1
                font-medium
                mx-auto
              "
            >
              Sign in
            </NuxtLink>

            <div class="text-sm p-2">
              New customer?
              <NuxtLink
                to="/signUp"
                class="text-blue-600"
                >Start here</NuxtLink
              >.
            </div>
          </div>
        </div>
      </div>
</template>


