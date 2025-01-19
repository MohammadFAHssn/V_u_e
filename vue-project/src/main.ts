import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import GlobalComponent from './components/GlobalComponent.vue'

const app = createApp(App)

// global component
app.component('GlobalComponent', GlobalComponent)

app.use(createPinia())

router.beforeEach(() => {})

app.use(router)

app.mount('#app')
