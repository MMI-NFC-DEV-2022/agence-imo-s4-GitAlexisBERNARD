import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'

import './assets/css/style.css'

const app = createApp(App)
app.use(plugin, defaultConfig)
app.use(
  createRouter({
    history: createWebHistory(),
    routes
  })
)

app.mount('#app')
