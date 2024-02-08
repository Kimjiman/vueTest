// 통계 라우터
const routes = [
    {
        path: 'chart',
        name: 'chart',
        component: () => import('@/views/statistics/Chart.vue'),
    },
];

export default routes;
