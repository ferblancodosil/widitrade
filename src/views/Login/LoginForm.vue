<template>
  <form class="form-login" @submit.prevent="login">
    <InputComponent
      v-model="username"
      label="User"
      placeholder="Enter your email"
      required
    />
    <InputComponent
      v-model="password"
      label="Password"
      isPassword
      placeholder="Enter your password"
      required
    />
    <ButtonComponent text="Login" />
  </form>
</template>
<script setup>
import InputComponent from "@/components/InputComponent.vue";
import ButtonComponent from "../../components/ButtonComponent.vue";
import { ref } from "vue";
const username = ref("");
const password = ref("");
const emit = defineEmits(["onLogin"]);

const login = () => {
  if (username.value && password.value) {
    emit("onLogin", { username: username.value, password: password.value });
  }
};
</script>
<style scoped>
.form-login {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxsmall);
}
</style>
