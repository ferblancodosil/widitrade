<template>
  <div class="input-component-label">
    <label :for="label" v-if="label">{{ label }}</label>
  </div>
  <div class="input-component">
    <input
      :type="showPassword ? 'text' : isPassword ? 'password' : 'text'"
      :placeholder="placeholder"
      :id="label"
    />
    <img
      v-if="isPassword"
      class="input-component-view-password"
      @click="showPassword = !showPassword"
      :src="showPassword ? eyeSelectedImage : eyeImage"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import eyeSelectedImage from "@/assets/eye-selected.svg";
import eyeImage from "@/assets/eye.svg";

defineProps({
  label: {
    type: String,
    required: true,
  },
  isPassword: {
    type: Boolean,
    required: false,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
});
const showPassword = ref(false);
</script>
<style scoped>
.input-component-label {
  font-family: "Mulish";
  font-style: normal;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-normal);
  line-height: 150%;
  color: var(--label-color);
  margin-bottom: var(--spacing-tiny);
}
.input-component {
  display: flex;
  border: var(--border-radius-small) solid var(--line-color);
  border-radius: var(--border-radius-large);
  justify-content: space-between;
  padding: 0 var(--spacing-xxsmall);

  input[type="text"],
  input[type="password"] {
    background-color: transparent;
    border: 0;
    width: 100%;
    outline: none;
    padding: var(--spacing-xxxsmall) 0;
    box-sizing: border-box;

    &:focus {
      border: 0;
    }
  }

  &:focus-within {
    border-color: var(--accent-color);
    background-color: var(--white-color);
  }

  .input-component-view-password {
    color: var(--color-black);
    cursor: pointer;
  }
}
</style>
