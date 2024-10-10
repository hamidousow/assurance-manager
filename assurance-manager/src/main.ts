import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router' 
import vueformConfig from '../vueform.config';
import Vueform from '@vueform/vueform'

const app = createApp(App)

app.use(createPinia())
app.use(Vueform, vueformConfig)
app.use(router)

app.mount('#app')
