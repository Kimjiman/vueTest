import { createRouter, createWebHistory } from 'vue-router';
import { useGlobalStore } from '@/store';
import { createPinia } from 'pinia';
import userRouter from '@/router/user';
import statisticsRouter from '@/router/statistics';

const pinia = createPinia();
const store = useGlobalStore(pinia);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/About.vue'),
        },
        ...userRouter.map(route => ({ ...route, path: `/user/${route.path}` })),
        ...statisticsRouter.map(route => ({ ...route, path: `/statistics/${route.path}` })),
    ],
});

// 전역가드로 user권한체크
const onBeforeEach = async (to, from, next) => {
    const user = store.getUser;
    return next();
};

const onAfterEach = async (to, from) => {};

router.beforeEach(onBeforeEach);
router.afterEach(onAfterEach);

export default router;
