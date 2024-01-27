import { createRouter, createWebHistory } from 'vue-router';
import { useGlobalStore } from '@/store';
import { createPinia } from 'pinia';
import userRouter from '@/router/user';

const pinia = createPinia();
const store = useGlobalStore(pinia);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
        },
        ...userRouter.map((route) => ({ ...route, path: `/user/${route.path}` })),
    ],
});

const onBeforeEach = async (to, from, next) => {
    console.log(router.getRoutes());
    const user = store.getUser;

    return next();
};

const onAfterEach = async (to, from) => {};

router.beforeEach(onBeforeEach);
router.afterEach(onAfterEach);

export default router;
