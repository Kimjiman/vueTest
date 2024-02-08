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
        {
            path: '/user',
            children: [...userRouter],
        },
        {
            path: '/statistics',
            children: [...statisticsRouter],
        },
    ],
});

// 전역가드 Before
const onBeforeEach = async (to, from, next) => {
    const user = store.getUser; // before Checked User
    return next();
};

// 전역 가드 After
const onAfterEach = async (to, from) => {};

router.beforeEach(onBeforeEach);
router.afterEach(onAfterEach);

export default router;
