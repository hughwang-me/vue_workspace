import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import './styles/base.scss'
import './styles/iconfont.css'

createApp(App).use(store).use(router).mount('#app')
