import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { icons } from './modules/font-awesome';

import Breadcrumbs from './components/Breadcrumbs.vue';

library.add(...icons);

createApp(App)
    .component('Icon', FontAwesomeIcon)
    .component('Breadcrumbs', Breadcrumbs)
    .mount('#app');
