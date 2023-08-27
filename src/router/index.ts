import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Login from '@/components/Login/Login.vue';
import  TasksManager  from '@/components/TasksManager/TasksManager.vue';

import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import auth from '../tools/authenticate/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/tasksmanager',
    name: 'TasksManager',
    component: TasksManager,
    meta: { requiresAuth: true }, // This indicates that the route needs authentication
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;






