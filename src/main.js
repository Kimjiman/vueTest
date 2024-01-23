import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App) // main

app.use(createPinia()) // store
app.use(router) // router

app.mount('#app') // app.mount
