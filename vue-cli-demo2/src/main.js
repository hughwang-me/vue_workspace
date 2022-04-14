import { createApp } from 'vue'
import HomePage from './view/HomePage'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(HomePage);

app.use(ElementPlus);
app.mount('#app')
