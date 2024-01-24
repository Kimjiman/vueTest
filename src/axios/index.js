import axios from 'axios';
import router from '@/router';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

const AxiosPlugin = {
    install: (app) => {
        app.config.globalProperties.$axios = instance;
    },
};

instance.interceptors.request.use(
    function (config) {
        config.headers['x-requested-with'] = 'XMLHttpRequest';
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);
// 응답 인터셉터
instance.interceptors.response.use(
    function (response) {
        let resData = response.data;
        if (!resData) {
            return Promise.reject({ message: 'invalid data format' });
        }
        if (undefined === resData.status) {
            return Promise.reject({ message: 'status not exist in body' });
        }
        if (0 < resData.status) {
            return Promise.reject({ message: resData.message, status: resData.status });
        }
        return resData.response;
    },
    function (error) {
        const status = error.response?.status;
        let data;
        if (401 === status) {
            router.replace({ name: 'login' }).catch(() => {});
            data = { status, message: '연결이 끊겼습니다. 다시 로그인해주세요.' };
        } else if (500 === status) {
            data = error.response.data;
        }
        return Promise.reject(data ? data : error);
    },
);

export { instance as axios, AxiosPlugin };
