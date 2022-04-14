import { createApp } from 'vue'
import HomePage from './view/HomePage'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'

const app = createApp(HomePage);

app.use(ElementPlus);
app.use(store);
app.mount('#app')
