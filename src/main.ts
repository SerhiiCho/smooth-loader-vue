import { createApp } from 'vue'
import App from './App.vue'
import SmoothLoader from './plugins/smooth-loader-vue'

createApp(App).use(SmoothLoader).mount('#app')
