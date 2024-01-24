import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { axios, AxiosPlugin } from './axios';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(AxiosPlugin);

app.mount('#app'); // app.mount
