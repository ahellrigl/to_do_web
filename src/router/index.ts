import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import jwtDecode from "jwt-decode";
import { useAuthStore } from "@/tools/stores/auth.store";
import { UserInterface } from "@/components/Login/login.interface";
import isAuthenticatedGuard from "@/tools/authentication/guards/auth-guard";

let idusuario = "0";

try {
  const auth = useAuthStore();
  const token = auth.access_token;

  if (token != undefined) {
    const decoded: UserInterface = jwtDecode(token);
    idusuario = decoded.sub;
  }
} catch {}

const routes = [
  {
    path: "/login",
    name: "login",
    beforeEnter: [isAuthenticatedGuard],
    component: () => import("../components/Login/Login.vue"),
  },
  {
    path: '/tasksmanager',
    name: 'TasksManager',
    beforeEnter: [isAuthenticatedGuard],
    component: () => import("../components/TasksManager/TasksManager.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
