<script setup>
import Countries from "~/json/Countries.json";
const country = useState("Country");
const isLoggedIn = useState("isLoggedIn");
const locationError = ref("");
const locationChosen = ref("");
const usAddress = ref("");
const postCode = ref("");
const CurrentLocation = ref("");
// selectedCountry.value = country.value;
const showDeliverToCard = useState("ShowDeliverToCard", () => false);
const { ChooseLocation } = useLocation();
const { getLocationByUSzipCode, getCountry } = useAmazon(); //await getLocationByUSzipCode(95110)
postCode.value = country.value.replace(/[^0-9]/g, "");
if (postCode.value) {
  usAddress.value = country.value;
  // selectedCountry.value = "";
}
const GetLocationByUSzipCode = async () => {
  locationError.value = "";
  if (postCode.value.length < 5) {
    locationError.value = "Please enter a valid US zip code";
    return;
  }
  try {
    const _location = await getLocationByUSzipCode(postCode.value);
    usAddress.value = _location;
    locationChosen.value = _location;
    CurrentLocation.value = "";
  } catch (error) {
    locationError.value = error.statusMessage;
  }
};

const ChangeLocation = () => {
  if (locationChosen.value) {
    ChooseLocation(locationChosen.value);
  }
  showDeliverToCard.value = false;
};
const GetCurrentLocation = async () => {
  const _location = await getCountry();
  CurrentLocation.value = _location;
  locationChosen.value = _location;
  usAddress.value = "";
  postCode.value = "";
};
</script>
<template>
  <div class="text-sm">
    <div
      class="bg-black w-full h-full opacity-70 fixed inset-0  z-10"
      @click="
        () => {
          showDeliverToCard = !showDeliverToCard;
        }
      "
    ></div>
    <div
      class="z-20 bg-white rounded-md fixed right-1/2 bottom-1/2 translate-y-2/4 translate-x-2/4 max-h-full overflow-y-scroll scrollbar-hide"
    >
      <div class="max-w-[350px] min-w-[300px]">
        <div class="bg-gray-300 p-4 font-bold text-xl">
          Choose your location
        </div>
        <div class="p-4">
          Delivery options and delivery speeds may vary for different locations

          <NuxtLink
            to="/signIn"
            v-if="!isLoggedIn"
            @click="showDeliverToCard = false"
            class="w-full block my-2.5 bg-amber-400 border-2 border-amber-500 rounded p-1.5 font-medium text-center"
          >
            Sign in to see your addresses
          </NuxtLink>
          <div class="flex items-center text-gray-500">
            <div class="border grow h-0"></div>
            <div class="grow-0 mx-2">enter a US zip code</div>
            <div class="border grow h-0"></div>
          </div>
          <div class="my-2">
            <div v-if="usAddress" class="border rounded bg-red-100 p-2 flex">
              <span class="truncate block">{{ usAddress }}</span>
              <NuxtLink
                to="/"
                class="text-blue-700 ml-3"
                @click="usAddress = ''"
                >Change</NuxtLink
              >
            </div>
            <div v-else class="flex">
              <input
                type="text"
                maxlength="5"
                class="border rounded grow mr-2 outline-0 p-1.5 border-stone-400"
                v-model="postCode"
              />
              <button
                class="border border-stone-400 rounded-md py-1.5 px-3 w-1/3 text-stone-600 bg-stone-200 hover:text-stone-900"
                @click="GetLocationByUSzipCode"
              >
                Aplly
              </button>
            </div>
            <div class="text-xs text-red-500 px-2 my-1">
              {{ locationError }}
            </div>
          </div>
          <div class="flex items-center text-gray-500">
            <div class="border grow h-0"></div>
            <div class="grow-0 mx-2">or Get your current location</div>
            <div class="border grow h-0"></div>
          </div>
          <div
            v-if="CurrentLocation"
            class="w-full border border-stone-400 rounded-md py-1.5 px-3 bg-red-100 my-2"
          >
            your current location is:
            <span class="font-bold">''{{ CurrentLocation }}''</span>
          </div>
          <button
            v-else
            class="w-full border border-stone-400 rounded-md py-1.5 px-3 bg-blue-200 hover:text-stone-900 my-2"
            @click="GetCurrentLocation"
          >
            get your location
          </button>

          <div class="flex items-center text-gray-500">
            <div class="border grow h-0"></div>
            <div class="grow-0 mx-2">or</div>
            <div class="border grow h-0"></div>
          </div>
          <select
            class="w-full bg-stone-200 border border-stone-400 p-2 mt-2 rounded-md cursor-pointer"
            @change="
              (e) => {
                usAddress = '';
                postCode = '';
                locationError = '';
                CurrentLocation = '';
                locationChosen = e.target.value;
              }
            "
          >
            <!-- v-if="usAddress" :v-model="usAddress"-->
            <option hidden>Ship outside the US</option>
            <option
              v-for="Country in Countries"
              :key="Country"
              :value="Country"
              :selected="
                country === Country && !usAddress && !CurrentLocation
                  ? true
                  : false
              "
            >
              {{ Country }}
            </option>
          </select>

          <div class="flex justify-between">
            <button
              class="bg-gray-300 border-2 border-gray-d00 rounded-md w-fit py-1 px-2 font-medium mt-4"
              @click="
                () => {
                  showDeliverToCard = false;
                  selectedCountry = '';
                }
              "
            >
              cancel
            </button>
            <button
              class="bg-amber-400 border-2 border-amber-500 rounded-md w-fit py-1 px-2 font-medium mt-4"
              @click="ChangeLocation"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
