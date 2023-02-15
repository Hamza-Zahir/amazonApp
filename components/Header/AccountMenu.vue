<script setup>
import AccontMenuLinks from "~/json/AccountMenuLinks.json";
const showAccountMenu = useState("ShowAccountMenu");
const showBrowserMenu = useState("ShowBrowserMenu");
const userName = useState("UserName");
const isLoggedIn = useState("isLoggedIn");
const { logoutHandler } = useAuth();
</script>
<template>
  <div
    class="
      hidden
      md:block
      absolute
      right-[-140px]
      top-[99%]
      w-[550px]
      h-auto
      p-3
      bg-white
      text-black
      border-2 border-gray-300
      rounded
      z-50
    "
  >
    <span
      class="
        bg-white
        w-[20px]
        h-[20px]
        block
        absolute
        right-[145px]
        top-[-10px]
        rotate-45
      "
    ></span>
    <div v-if="isLoggedIn" class="text-sm p-2 flex justify-between">
      Who's shopping? Select a profile.
      <div class="text-blue-600 cursor-pointer">
        Manage Profiles
        <Icon
          name="material-symbols:chevron-right"
          class="text-xl text-gray-500"
        />
      </div>
    </div>
    <div v-else class="text-center mt-3">
      <NuxtLink
        to="/signIn"
        @click="showAccountMenu = false"
        class="
          bg-amber-400
          border-2 border-amber-500
          rounded
          w-fit
          px-20
          py-1.5
          text-lg
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
          @click="showAccountMenu = false"
          class="text-blue-600"
          >Start here</NuxtLink
        >.
      </div>
    </div>

    <div class="flex mt-2 border-t">
      <div class="w-1/2 border-r p-3 mt-2">
        <h3 class="text-xl font-bold">Your Lists</h3>
        <NuxtLink
          v-for="link in AccontMenuLinks['Your Lists']"
          :key="link"
          to="/"
          @click="showAccountMenu = false"
          class="block m-1.5 hover:text-amber-600"
          >{{ link }}</NuxtLink
        >
      </div>

      <div class="w-1/2 border-l p-3 mt-2">
        <h3 class="text-xl font-bold">Your Account</h3>
        <NuxtLink
          v-for="link in AccontMenuLinks['Your Account']"
          :key="link"
          @click="showAccountMenu = false"
          to="/"
          class="block m-1.5 hover:text-amber-600"
          >{{ link }}</NuxtLink
        >
        <div
          v-if="isLoggedIn"
          class="block m-2 hover:text-amber-600 cursor-pointer"
          @click="
            () => {
              logoutHandler();
              showAccountMenu = false;
            }
          "
        >
          Sign Out
        </div>
      </div>
    </div>
  </div>
  <!-- ..... Small Divaises ..... -->
  <div
    class="top-0 w-full md:hidden"
    :class="showAccountMenu ? 'fixed' : 'absolute'"
  >
    <div
      v-if="showAccountMenu"
      class="bg-black w-full h-full opacity-80 fixed inset-0"
      @click="
        () => {
          showAccountMenu = !showAccountMenu;
        }
      "
    ></div>

    <div
      class="
        absolute
        top-0
        bg-white
        w-[320px]
        sm:w-[350px]
        h-[100vh]
        text-black
        duration-500
        pb-[90px]
      "
      :class="showAccountMenu ? 'right-0' : 'right-[-400px]'"
    >
      <div
        v-if="showAccountMenu"
        class="absolute right-[100%] top-5 text-white ml-2 cursor-pointer"
        @click="showAccountMenu = !showAccountMenu"
      >
        <Icon name="iwwa:delete" class="text-4xl mr-2 pb-1" />
      </div>
      <div class="bg-gray-800 w-full text-white h-[90px]">
        <div
          class="flex items-center justify-end p-2 cursor-pointer"
          @click="
            () => {
              showBrowserMenu = !showBrowserMenu;
              showAccountMenu = !showAccountMenu;
            }
          "
        >
          Browser
          <Icon name="ri:menu-line" class="text-xl ml-2" />
        </div>
        <div class="px-3 px-7 flex items-center">
          <Icon name="carbon:user-avatar-filled" class="text-4xl mr-2 pb-1" />
          <span class="text-xl font-medium truncate">
            Hello,
            <span v-if="isLoggedIn">{{ userName }}</span>
            <NuxtLink
              v-else
              to="/signIn"
              @click="showAccountMenu = !showAccountMenu"
              >sign in</NuxtLink
            >
          </span>
        </div>
      </div>

      <div class="h-full w-full overflow-y-scroll overflow-x-clip">
        <div class="">
          <div
            class="border-b-4 border-neutral-300 p-3"
            v-for="(links, LinksTitle) in AccontMenuLinks"
            :key="`t-${LinksTitle}`"
          >
            <div class="text-xl font-extrabold">{{ LinksTitle }}</div>

            <NuxtLink
              to="/"
              @click="showAccountMenu = !showAccountMenu"
              class="block p-2 m-1 font-medium hover:bg-gray-100"
              v-for="linkDesc in links"
              :key="`lin-${linkDesc}`"
              >{{ linkDesc }}
            </NuxtLink>
          </div>
        </div>

        <div
          v-if="isLoggedIn"
          @click="
            () => {
              logoutHandler();
              showAccountMenu = false;
            }
          "
          class="p-3 px-7 cursor-pointer hover:bg-gray-200"
        >
          Sign Out
        </div>
      </div>
    </div>
  </div>
</template>
