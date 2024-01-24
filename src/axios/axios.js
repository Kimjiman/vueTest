import axios from 'axios';
import router from '@/routes';
const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});
instance.interceptors.request.use(
    function (config) {
        // 요청 성공 직전 호출됩니다.
        // config.headers['Authorization'] = process.env.VUE_APP_AUTH;
        return config;
    },
    function (error) {
        // 요청 에러 직전 호출됩니다.
        return Promise.reject(error);
    },
);
// 응답 인터셉터
instance.interceptors.response.use(
    function (response) {
        /**
         * http status가 200인 경우
         * 응답 성공 직전 호출됩니다.
         * .then() 으로 이어집니다.
         */
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
        /**
         * http status가 200이 아닌 경우
         * 응답 에러 직전 호출됩니다.
         * .catch() 으로 이어집니다.
         */
        const status = error.response.status;
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
export default instance;
