<template>
  <h1>Login</h1>
  <InputComponent label="User" placeholder="Enter your email" required />
  <InputComponent
    label="Password"
    isPassword
    placeholder="Enter your password"
    required
  />
  <ButtonComponent text="Login" @onClick="login" />
</template>
<script setup>
import InputComponent from "@/components/InputComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";

const login = () => {
  alert("login");
};
</script>
