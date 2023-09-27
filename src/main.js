import { createApp } from 'vue'

import App from './App.vue'

// Import Pinia
import { createPinia } from 'pinia';

// Import Router
import router from './router/index.js';

// Using Tailwind Css
import './index.css'  

const pinia = createPinia(App);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app')
