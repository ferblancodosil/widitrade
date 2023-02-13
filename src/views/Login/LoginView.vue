<template>
  <div class="login-view">
    <div class="wrap-login">
      <img class="logo" src="@/assets/logo.svg" />
      <LoginForm @onLogin="redirectHome" />
    </div>
    <div class="wrap-image"></div>
  </div>
</template>
<script setup>
import LoginForm from "./LoginForm.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const redirectHome = ({ username, password }) => {
  if (username && password) {
    router.push({
      name: "home",
    });
  }
};
</script>
<style scoped>
.login-view {
  background-color: var(--white-color);
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  .wrap-login {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxlarge);
    background-color: var(--white-color);
    height: 100%;
    display: flex;
    justify-content: center;

    .logo {
      width: 7.188rem;
      height: 5.125rem;
    }
  }

  .wrap-image {
    display: none;
    background-size: cover, cover;
    background-position: center, left top;
    background-repeat: no-repeat, no-repeat;
    background-image: var(--gradient-color), url(@/assets/photo.png);
  }
}

@media (min-width: 1025px) {
  .login-view {
    grid-template-columns: 1fr 1fr;
    .wrap-login {
      padding: 0 20%;
    }

    .wrap-image {
      display: block;
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .login-view {
    background-color: var(--background-color);
    .wrap-login {
      border-radius: var(--border-radius-large);
      padding: 0 var(--spacing-xxlarge);
      width: 65vw;
      height: 65vh;
      margin: auto;
    }
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .login-view {
    .wrap-login {
      padding: 0 var(--spacing-small);
    }
  }
}
</style>
