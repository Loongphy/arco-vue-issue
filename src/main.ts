import './assets/main.css'

import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'

// TODO 样式在 router 之前
// 当你在 App.vue 引入任意 Arco 组件时，由于 arco-plugins 在 vite dev 模式是全量引入，因此会 import 进所有的样式
// But! 这和引入顺序有啥关系，为啥全量引入的位置和部分引入的位置不一样？
import '@/assets/style/global.less'
import router from './router'

const app = createApp(App)
app.use(ArcoVue, {})
app.use(ArcoVueIcon)
app.use(router)

app.mount('#app')
