import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/LoginView.vue";
import Home from "@/views/HomeView.vue";

const routes = [
  { name: "login", path: "/", component: Login },
  { name: "home", path: "/home", component: Home },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
