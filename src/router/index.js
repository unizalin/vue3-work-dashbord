import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/layout/index.vue';

const routes = [
  {
    path: '/',
    // component: Layout,
    children:[
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/constructions',
    name: 'construction',
    component: () => import('@/views/Construction.vue'),
  },
  {
    path: '/designProcess',
    name: 'DesignProcess',
    component: () => import('@/views/DesignProcess.vue'),
  },
  {
    path: '/drawingSystem',
    name: 'DrawingSystem',
    component: () => import('@/views/DrawingSystem.vue'),
  },
  {
    path: '/venderInfo',
    name: 'VenderInfo',
    component: () => import('@/views/VenderInfo.vue'),
  },
  {
    path: '/materials',
    name: 'Ｍaterials',
    component: () => import('@/views/Ｍaterials.vue'),
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: () => import('@/views/Equipment.vue'),
  },
  {
    path: '/lampsList',
    name: 'LampsList',
    component: () => import('@/views/LampsList.vue'),
  },
  {
    path: '/designBasics',
    name: 'DesignBasics',
    component: () => import('@/views/DesignBasics.vue'),
  },
  {
    path: '/backend',
    name: 'Backend',
    component: () => import('@/views/Backend.vue'),
  },
  {
    path: '/backup',
    name: 'Backup',
    component: () => import('@/views/Backup.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
