# arco-plugins-vue-css-order

## 问题

开发环境与生产环境 CSS 优先级不一致

## 相关 issue

- https://github.com/vitejs/vite/issues/3924

- https://github.com/youzan/vant/issues/11049

## 临时解决
### 方法一：全量导入样式

```ts
// main.ts
import '@arco-design/web-vue/dist/arco.css'
```

### 方法二：在 App.vue 导入所需的 Arco 组件

如：直接在 App.vue 导入 Card 组件或者导入一个包含 Card 的组件，见 [App.vue](./src/App.vue#L25)

如果使用的组件不是很多，可以尝试下在 App.vue 引入所需的组件，行内样式设置为 `display:none`。

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router'
import './style.css'
import 'virtual:uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

```vue
<!-- App.vue -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <a-card style="display: none;" />
  <a-button style="display: none;" />
  <RouterView />
</template>
```
