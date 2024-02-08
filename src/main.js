import './assets/main.css';
import plugin from './plugin';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(plugin);

app.mount('#app');
