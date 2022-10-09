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
    // component: Layout,
    children:[
      {
        path: '/',
        component: () => import('@/views/Construction.vue'),
        name: 'Construction',
        meta: { title: '工法' }
      }
    ]
  },
  {
    path: '/designProcess',
    // component: Layout,
    children:[
      {
        path: '/',
        component: () => import('@/views/DesignProcess.vue'),
        name: 'DesignProcess',
        meta: { title: '設計流程' }
      }
    ]
  },
  {
    path: '/drawingSystem',
    // component: Layout,
    children:[
      {
        path: '/',
        name: 'DrawingSystem',
        component: () => import('@/views/DrawingSystem.vue'),
        meta: { title: '施工圖系統' }
      }
    ]
  },
  {
    path: '/venderInfo',
    // component: Layout,
    children:[
      {
        path: '/',
        name: 'VenderInfo',
        component: () => import('@/views/VenderInfo.vue'),
        meta: { title: '廠商資訊' }
      }
    ]
  },
  {
    path: '/materials',
    // component: Layout,
    children:[
      {
        path: '/',
        name: 'Ｍaterials',
        component: () => import('@/views/Ｍaterials.vue'),
        meta: { title: '建材材料' }
      }
    ]
  },
  {
    path: '/equipment',
    // component: Layout,
    children:[
      {
        path: '/',
        name: 'Equipment',
        component: () => import('@/views/Equipment.vue'),
        meta: { title: '設備表格' }
      }
    ]
  },
  {
    path: '/lampsList',
    // component: Layout,
    children:[
      {
        path: '/',
        name: 'LampsList',
        component: () => import('@/views/LampsList.vue'),
        meta: { title: '燈具表格' }
      }
    ]
  },
  {
    path: '/designBasics',
    // component: Layout,
    children:[
      {
        path: '/',
        name: 'DesignBasics',
        component: () => import('@/views/DesignBasics.vue'),
        meta: { title: '設計基礎知識' }
      }
    ]
  },
  {
    path: '/backend',
    // component: Layout,
    children:[
      {
        path: '/',
        name: 'Backend',
        component: () => import('@/views/Backend.vue'),
        meta: { title: '後台架構' }
      }
    ]
  },
  {
    path: '/backup',
    // component: Layout,
    children:[
      {
        path: '/',
        name: 'Backup',
        component: () => import('@/views/Backup.vue'),
        meta: { title: '歷史專案資料歸檔' }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
