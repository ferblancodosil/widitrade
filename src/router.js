import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/LoginView.vue";
import Home from "@/views/HomeView.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Home },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
