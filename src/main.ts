import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { icons } from './modules/font-awesome'; 

library.add(...icons);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
