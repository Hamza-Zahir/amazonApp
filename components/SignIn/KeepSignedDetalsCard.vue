<script setup>
const emit = defineEmits(["ShowDetalsCard"]);

const ShowDetalsCard = () => {
  emit("ShowDetalsCard");
};
</script>

<template>
  <div class="border border-gray-400 w-full rounded">
    <div
      class="bg-gray-200 p-2 flex justify-between border-b border-gray-400 font-bold md:text-lg"
    >
      "Keep Me Signed In" Checkbox
      <Icon
        name="iwwa:delete"
        class="text-xl font-bold cursor-pointer"
        @click="ShowDetalsCard"
      />
    </div>
    <div class="bg-gray-100 p-3 py-4">
      <p class="">
        Choosing "Keep me signed in" reduces the number of times you're asked to
        Sign-In on this device.
      </p>
      <br />
      <p class="">
        To keep your account secure, use this option only on your personal
        devices.
      </p>
    </div>
  </div>
</template>
