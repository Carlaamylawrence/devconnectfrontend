import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/LandingView.vue"),
  },
  {
    path: "/dev",
    name: "dev",
    component: () => import("../views/DevSignUpView.vue"),
  },
  {
    path: "/client",
    name: "client",
    component: () => import("../views/ClientSignUpView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/devs",
    name: "devs",
    component: () => import("../views/DevDisplay.vue"),
  },
  {
    path: "/devs/:id",
    name: "SingleUser",
    component: () => import("../views/SingleUser.vue"),
    props: true,
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/ProjectsDisplay.vue"),
  },
  {
    path: "/projects/:id",
    name: "SingleProject",
    component: () => import("../views/SingleProject.vue"),
    props: true,
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
