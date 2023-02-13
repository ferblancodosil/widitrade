<template>
  <div class="input-component">
    <div class="input-component-entry-label">
      <label :for="label" v-if="label">{{ label }}</label>
    </div>
    <div class="input-component-entry">
      <input
        :type="showPassword ? 'text' : isPassword ? 'password' : 'email'"
        :placeholder="placeholder"
        :id="label"
        :required="required"
        v-model="inputValue"
      />
      <img
        v-if="isPassword"
        class="input-component-entry-view-password"
        @click="showPassword = !showPassword"
        :src="showPassword ? eyeSelectedImage : eyeImage"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import eyeSelectedImage from "@/assets/eye-selected.svg";
import eyeImage from "@/assets/eye.svg";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
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
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const inputValue = ref(props.modelValue);
watchEffect(() => {
  emit("update:modelValue", inputValue.value);
});
const showPassword = ref(false);
</script>
<style scoped>
.input-component-entry-label {
  font-family: "Mulish";
  font-style: normal;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-normal);
  line-height: 150%;
  color: var(--label-color);
  margin-bottom: var(--spacing-tiny);
}
.input-component-entry {
  display: flex;
  border: var(--border-radius-small) solid var(--line-color);
  border-radius: var(--border-radius-medium);
  justify-content: space-between;
  padding: 0 var(--spacing-xxsmall);

  input[type="text"],
  input[type="password"],
  input[type="email"] {
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

  .input-component-entry-view-password {
    color: var(--color-black);
    cursor: pointer;
  }
}
</style>
