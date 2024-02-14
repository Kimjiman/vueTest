import './assets/main.css';
import plugins from './install/plugins';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(plugins);

app.mount('#app');
