// 통계 라우터
const userRouter = [
    {
        path: 'chart',
        name: 'chart',
        component: () => import('@/views/statistics/Chart.vue'),
    },
];

export default userRouter;
