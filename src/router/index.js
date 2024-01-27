import { createRouter, createWebHistory } from 'vue-router';

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
    ],
});
const onBeforeEach = async (to, from, next) => {
    // console.log('onBeforeEach');
    // console.log('to', to);
    // console.log('from', from);

    return next();
};

const onAfterEach = async (to, from) => {
    // console.log('onAfterEach');
    // console.log('to', to);
    // console.log('from', from);
};

router.beforeEach(onBeforeEach);
router.afterEach(onAfterEach);

export default router;
