<script setup>
const { getUserByEmail } = useAuth();
const userEmail = useState("UserEmail", () => "");
const signInError = useState("SignInError");

const email = ref("");

const handleSubmit = async () => {
  if (!email) {
    return;
  }
  try {
    signInError.value = "";
    const _user = await getUserByEmail(email.value);
    if (!_user) {
      signInError.value = "We cannot find an account with that email address";
      return;
    }
    userEmail.value = email.value;
  } catch (error) {
    throw error;
  }
};
</script>

<template>
  <div class="border border-gray-300 rounded-md my-5 p-5 w-full">
    <h3 class="text-3xl font-bold mb-3">Sign in</h3>
    <label class="block font-semibold p-1 text-sm">Email Address</label>
    <input
      type="email"
      placeholder="email"
      v-model="email"
      class="block w-full border border-gray-400 bg-gray-100 outline-amber-500 p-1.5 rounded"
    />
    <button
      class="my-4 w-full p-1.5 text-lg font-bold bg-amber-500 rounded-md border hover:bg-amber-600"
      @click="handleSubmit()"
    >
      Continue
    </button>
    <div class="text-sm my-2">
      By continuing, you agree to Amazon's
      <NuxtLink to="/signIn" class="text-blue-700">Conditions of Use </NuxtLink>
      and
      <NuxtLink to="/signIn" class="text-blue-700">Privacy Notice</NuxtLink>.
    </div>
  </div>
</template>
