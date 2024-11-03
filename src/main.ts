import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3TouchEvents from 'vue3-touch-events'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import 'skeleton-css/css/skeleton.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3TouchEvents as any)  // 一時的な対処として any を使用

app.mount('#app')