<template>
  <h1>Login</h1>
  <InputComponent label="User" placeholder="Enter your email" />
  <InputComponent
    label="Password"
    isPassword
    placeholder="Enter your password"
  />
</template>
<script setup>
import InputComponent from "@/components/InputComponent.vue";
</script>
