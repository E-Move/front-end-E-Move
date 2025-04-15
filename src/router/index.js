import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SuportView from "@/views/SuportView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/suporte",
      name: "suport",
      component: SuportView,
    },
  ],
})

export default router
