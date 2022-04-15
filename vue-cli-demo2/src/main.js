import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import router from './router'
import App from './App'

const app = createApp(App);

app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount('#app')
