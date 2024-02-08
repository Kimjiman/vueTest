// 회원 관련 라우터
const routes = [
    {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/login.vue'),
    },
];

export default routes;
