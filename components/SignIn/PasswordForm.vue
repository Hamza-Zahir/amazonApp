<script setup>
const { SignIn } = useAuth();
const userEmail = useState("UserEmail");
const password = ref("");
const ShowKeepSignedDetalsCard = ref(false);
const ShowPassword = ref(false);
const signInError = useState("SignInError");
const KeepSignedIn = ref(false);
const ShowDetalsCard = () => {
  ShowKeepSignedDetalsCard.value = !ShowKeepSignedDetalsCard.value;
};
const handleSubmit = async () => {
  if (!password.value) {
    return;
  }
  signInError.value = "";
  try {
    await SignIn(
      { email: userEmail.value, password: password.value },
      KeepSignedIn.value
    );
    userEmail.value = "";
  } catch (error) {
    signInError.value = error.statusMessage;
  }
};
</script>

<template>
  <div class="border border-gray-300 rounded-md my-5 p-5 w-full">
    <h3 class="text-3xl font-bold mb-3">Sign in</h3>
    <div class="p-2 text-sm flex">
      <span class="truncate block">{{ userEmail }} </span>
      <button
        class="text-blue-700 underline ml-2"
        @click="
          () => {
            userEmail = null;
            signInError = null;
          }
        "
      >
        Change
      </button>
    </div>
    <div class="">
      <label class="block font-semibold p-1 text-sm">password</label>
      <input
        :type="ShowPassword ? 'text' : 'password'"
        name=""
        id=""
        class="block w-full border border-gray-400 bg-gray-100 outline-amber-500 p-1.5 rounded"
        v-model="password"
      />
    </div>
    <div class="mt-3 text-sm">
      <input
        type="checkbox"
        name=""
        id="ShowPasswordCheckbox"
        v-model="ShowPassword"
        class="mx-2 cursor-pointer"
      />
      <label for="ShowPasswordCheckbox" class="cursor-pointer"
        >Show Password</label
      >
    </div>

    <button
      class="my-4 w-full p-1.5 text-lg font-bold bg-amber-500 rounded-md border hover:bg-amber-600"
      @click="handleSubmit()"
    >
      Sign in
    </button>
    <div class="mt-3 text-sm relative">
      <input
        type="checkbox"
        name=""
        id="KeepSignedIn"
        class="mx-2 cursor-pointer"
        v-model="KeepSignedIn"
      />
      <label for="KeepSignedIn" class="cursor-pointer"
        >Keep me signed in.
      </label>
      <button
        @click="ShowDetalsCard()"
        class="text-blue-600 hover:text-blue-800 underline"
      >
        Details
        <Icon
          v-if="ShowKeepSignedDetalsCard"
          name="material-symbols:arrow-drop-up"
          class="text-xl self-end"
        />
        <Icon
          v-else
          name="material-symbols:arrow-drop-down"
          class="text-xl self-end"
        />
      </button>
      <div v-if="ShowKeepSignedDetalsCard" class="absolute bottom-full">
        <SignInKeepSignedDetalsCard @ShowDetalsCard="ShowDetalsCard" />
      </div>
    </div>
  </div>
</template>
