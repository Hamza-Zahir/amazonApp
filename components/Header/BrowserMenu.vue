<script setup>
import BrowserMenulinksData from "~/json/BrowserMenulinks.json";

const showBrowserMenu = useState("ShowBrowserMenu", () => false);
const userName = useState("UserName");
const isLoggedIn = useState("isLoggedIn");
const accessedLinks = useState("AccessedLinks", () => null);
const showAccountMenu = useState("ShowAccountMenu");
</script>

<template>
  <div class="top-0" :class="showBrowserMenu ? 'fixed' : 'absolute'">
    <div
      class="bg-black w-full h-full opacity-80 fixed inset-0"
      @click="
        () => {
          showBrowserMenu = !showBrowserMenu;
          accessedLinks = null;
        }
      "
      v-if="showBrowserMenu"
    ></div>
    <div
      v-if="showBrowserMenu"
      class="fixed right-0 top-5 text-white ml-2 cursor-pointer"
      @click="showBrowserMenu = !showBrowserMenu"
    >
      <Icon name="iwwa:delete" class="text-4xl mr-2 pb-1" />
    </div>
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
        md:pb-[55px]
        overflow-clip
      "
      :class="showBrowserMenu ? 'left-0' : 'left-[-400px]'"
    >
      <div class="bg-gray-800 w-full text-white h-[90px] md:h-[55px]">
        <div
          class="flex items-center justify-end p-2 cursor-pointer md:hidden"
          @click="
            () => {
              showBrowserMenu = !showBrowserMenu;
              showAccountMenu = !showAccountMenu;
            }
          "
        >
          Your Account
          <Icon name="ooui:user-avatar-outline" class="ml-3" />
        </div>
        <div class="px-3 md:p-3 px-7 flex items-center">
          <Icon name="carbon:user-avatar-filled" class="text-4xl mr-2 pb-1" />
          <span class="text-xl font-medium truncate">
            Hello,
            <span v-if="isLoggedIn">{{ userName }}</span>
            <NuxtLink
              v-else
              to="/signIn"
              @click="showBrowserMenu = !showBrowserMenu"
              >sign in</NuxtLink
            >
          </span>
        </div>
      </div>
      <div class="h-full w-full overflow-y-scroll overflow-x-clip">
        <div
          class="duration-500"
          :class="accessedLinks ? 'absolute left-[-100%]' : 'left-0 relative'"
        >
          <div
            v-for="(prodacts, LinksTitle) in BrowserMenulinksData"
            :key="LinksTitle"
            class="border-b border-neutral-300 p-3"
          >
            <h1 class="text-xl font-bold p-2">{{ LinksTitle }}</h1>
            <div
              v-for="(links, LinksDescription) in prodacts"
              :key="LinksDescription"
              class="
                m-1
                p-2
                pl-4
                cursor-pointer
                bg-gray-100
                hover:bg-gray-300
                flex
                justify-between
                items-center
              "
              @click="accessedLinks = links"
            >
              {{ LinksDescription }}
              <Icon
                name="material-symbols:chevron-right"
                class="text-2xl text-gray-500"
              />
            </div>
          </div>
        </div>

        <div
          class="bg-white duration-500"
          :class="
            accessedLinks
              ? 'right-0 top-auto relative'
              : 'absolute top-[90px] md:top-[55px] right-[-100%]'
          "
        >
          <div
            class="
              overflow-clip
              font-bold
              bg-gray-200
              text-gray-500
              p-3
              pl-5
              flex
              items-center
              cursor-pointer
            "
            @click="accessedLinks = null"
          >
            <Icon name="mdi:arrow-left" class="text-xl mr-4" />
            MAIN MENU
          </div>

          <HeaderBrowserMenuLink :Links="accessedLinks" />
        </div>
      </div>
    </div>
  </div>
</template>
