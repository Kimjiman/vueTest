import '@/assets/main.css';
import plugins from '@/install/plugins';
import directive from '@/install/directive';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(plugins).use(directive);

app.mount('#app');
