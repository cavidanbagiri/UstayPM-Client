import { createApp } from 'vue'

import App from './App.vue'

// Import Pinia
import { createPinia } from 'pinia';

// Import Router
import router from './router/index.js';

// Using Tailwind Css
import './index.css'  


// Import Plugins
import validation from './plugins/validation'; 

// Create Pinia
const pinia = createPinia(App);


const app = createApp(App);

// User Pinia
app.use(pinia);
// Use Router
app.use(router);

// User Plugin Validation
app.use(validation);

app.mount('#app')
