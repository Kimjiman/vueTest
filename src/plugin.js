import { createPinia } from 'pinia';
import router from './router';
import { axiosPlugin } from './axios';

const pinia = createPinia();

export default {
    install(app) {
        app.use(pinia).use(router).use(axiosPlugin);
    },
};
