<script setup>
import Joi from "joi";
const { SignUp } = useAuth();
const ShowPassword = ref(false);
const PasswordInfo = ref(true);
const userData = ref(null);
const signUpError = useState("SignUpError");
const country = useState("Country");

const inputsErrors = reactive({
  name: null,
  email: null,
  password: null,
  confirmPassword: null,
});
const formData = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const validetFormData = () => {
  PasswordInfo.value = false;
  !formData.name.trim() ? (inputsErrors.name = "Enter your name") : null;
  !formData.password.trim() || [...formData.password.trim()].length < 6
    ? (inputsErrors.password = "Minimum 6 characters required")
    : null;
  formData.password !== formData.confirmPassword
    ? (inputsErrors.confirmPassword = "Passwords must match")
    : null;

  let { error } = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .message("Please enter a valid email. With a '.com' or '.net' extension")
      .required(),
  }).validate({ email: formData.email });
  if (error) {
    inputsErrors.email = error.message;
  }
};
const handleSubmit = async () => {
  signUpError.value = "";
  validetFormData();
  if (
    inputsErrors.name ||
    inputsErrors.email ||
    inputsErrors.password ||
    inputsErrors.confirmPassword
  ) {
    return;
  }
  try {

    await SignUp({
      email: formData.email,
      name: formData.name,
      password: formData.password,
      location: country.value,
    });
  
  } catch (error) {
    signUpError.value = error.statusMessage;
  }
};
</script>

<template>
  <div class="border border-gray-300 rounded-md my-5 p-5 max-w-[370px]">
    <h3 class="text-3xl font-bold mb-3">Create account</h3>
    <div class="">
      <div class="mt-2">
        <label class="block font-semibold p-1 text-sm">Your Name</label>
        <input
          type="text"
          placeholder="First and last name"
          class="block w-full border border-gray-400 bg-gray-100 outline-amber-500 p-1.5 rounded"
          v-model="formData.name"
          @input="inputsErrors.name = null"
        />
        <span class="text-xs text-red-600" v-if="inputsErrors.name">{{
          inputsErrors.name
        }}</span>
      </div>

      <div class="mt-2">
        <label class="block font-semibold p-1 text-sm">Email Address</label>
        <input
          type="email"
          placeholder="email"
          class="block w-full border border-gray-400 bg-gray-100 outline-amber-500 p-1.5 rounded"
          v-model="formData.email"
          @input="inputsErrors.email = null"
        />
        <span class="text-xs text-red-600" v-if="inputsErrors.email">{{
          inputsErrors.email
        }}</span>
      </div>
      <div class="mt-2">
        <label class="block font-semibold p-1 text-sm">Password</label>
        <input
          :type="ShowPassword ? 'text' : 'password'"
          name=""
          id=""
          placeholder="At least 6 characters"
          class="block w-full border border-gray-400 bg-gray-100 outline-amber-500 p-1.5 rounded"
          v-model="formData.password"
          @input="
            (e) => {
              if (e.target.value.length >= 6) {
                inputsErrors.password = null;
              }
            }
          "
        />
        <span class="text-xs text-red-600" v-if="inputsErrors.password">{{
          inputsErrors.password
        }}</span>

        <div v-if="PasswordInfo">
          <Icon name="mdi:information-variant" class="text-blue-400" />
          <span class="text-xs"> Passwords must be at least 6 characters.</span>
        </div>
      </div>

      <div class="mt-2">
        <label class="block font-semibold p-1 text-sm">Re-enter password</label>
        <input
          :type="ShowPassword ? 'text' : 'password'"
          name=""
          id=""
          class="block w-full border border-gray-400 bg-gray-100 outline-amber-500 p-1.5 rounded"
          v-model="formData.confirmPassword"
          @input="
            (e) => {
              if (e.target.value === formData.password) {
                inputsErrors.confirmPassword = null;
              }
            }
          "
        />
        <span
          class="text-xs text-red-600"
          v-if="inputsErrors.confirmPassword"
          >{{ inputsErrors.confirmPassword }}</span
        >
      </div>
      <div class="mt-3 text-sm">
        <input
          type="checkbox"
          name=""
          id="ShowPasswordCheckbox"
          @click="ShowPassword = !ShowPassword"
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
        Continue
      </button>
    </div>

    <div class="text-sm my-2">
      By continuing, you agree to Amazon's
      <NuxtLink to="/signUp" class="text-blue-700">Conditions of Use </NuxtLink>
      and
      <NuxtLink to="/signUp" class="text-blue-700">Privacy Notice</NuxtLink>.
    </div>

    <div
      class="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 pb-1"
    ></div>
    <div class="text-sm py-5 text-center bg-gradient-to-b from-gray-50">
      Already have an account?
      <NuxtLink to="/signIn" class="text-blue-700" @click="signUpError = ''"
        >Sign in </NuxtLink
      >.
    </div>
  </div>
</template>
