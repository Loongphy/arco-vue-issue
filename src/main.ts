import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@/assets/style/global.less'

import router from './router'


const app = createApp(App)
app.use(ArcoVue, {});
app.use(ArcoVueIcon);
app.use(router)

app.mount('#app')
