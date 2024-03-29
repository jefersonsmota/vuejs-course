import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
