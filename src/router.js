import { createRouter, createWebHistory } from "vue-router";
import contact from "@/pages/contact.vue";
import profile from "@/pages/profile.vue";
import main from "@/pages/main.vue";

const routes = [
  { path: "/", name: "main", component: main },
  { path: "/contact", name: "contact", component: contact },
  { path: "/profile", name: "profile", component: profile }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
