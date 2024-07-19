import { createRouter, createWebHistory } from "vue-router";
import CoursePortal from "./pages/CoursePortal.vue";
import Customer from "./pages/Customer.vue";
import StartHere from "./pages/StartHere.vue";
import NotFound from "./pages/NotFound.vue";
import PageHeader from "./components/PageHeader.vue";
const router = createRouter({
  history: createWebHistory(),

  // funzione per far si che quando si caricano altre pagine vengano visualizzate sempre a partire dall inizio
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },

  routes: [
    {
      path: "/",
      name: "CoursePortal",
      component: CoursePortal,
    },
    {
      path: "/customer",
      name: "Customer",
      component: Customer,
    },
    {
      path: "/starthere",
      name: "StartHere",
      component: StartHere,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});
export { router };
