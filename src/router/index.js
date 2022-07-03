import { createRouter, createWebHashHistory } from "vue-router";
import DesignerInputView from "@/views/DesignerInputView"
import AboutView from "@/views/AboutView"

const routes = [
  {
    path: "/",
    name: "Home",
    component: AboutView,
  },
  {
    path: "/dataoffer/overview",
    name: "Overview",
    component: DesignerInputView,
  }

];

const router = createRouter({
  history:createWebHashHistory(),
  routes,
});

export default router;