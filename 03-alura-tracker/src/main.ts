import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import roteador from './router';
const pinia = createPinia();


const app = createApp(App)
.use(pinia)
.use(roteador)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');