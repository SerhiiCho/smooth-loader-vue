import { createApp } from 'vue'
import App from './App.vue'
import TippyVue from './plugins/tippyjs-vue'

createApp(App).use(TippyVue).mount('#app')
