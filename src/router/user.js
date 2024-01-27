const userRouter = [
    {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/login.vue'),
    },
];

export default userRouter;
