import { createPinia } from 'pinia';
import router from '@/router';
import { axiosPlugin } from '@/axios';
import elementPlus from 'element-plus';

const pinia = createPinia();

export default {
    install(app) {
        app.use(pinia).use(router).use(axiosPlugin).use(elementPlus);
    },
};
