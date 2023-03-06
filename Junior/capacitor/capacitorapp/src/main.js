import { createApp } from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script'
import { BleClient } from '@capacitor-community/bluetooth-le';
await BleClient.initialize({ androidNeverForLocation: true });


const app = createApp(App)
app.use(LoadScript)

import './assets/main.css'


createApp(App).mount('#app')
