import App from './App1.vue'

const HelloVueApp = {
    data() {
        return {
            message: 'Hello Vue!!'
        }
    }
}

Vue.createApp(App).mount('#app')
