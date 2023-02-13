<template>
  <button class="button-component" @click="emit('onClick')">
    {{ text }}
  </button>
</template>
<script setup>
const emit = defineEmits(["onClick"]);

defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.button-component {
  padding: var(--spacing-xxxsmall) var(--spacing-regular);
  text-align: center;
  width: 100%;
  height: var(--spacing-medium);
  background: var(--primary-color);
  border-radius: var(--border-radius-xlarge);
  border: 0;
  color: var(--white-color);
  font-family: "Inter";
  font-style: normal;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-normal);
  cursor: pointer;
}
</style>
