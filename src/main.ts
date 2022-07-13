import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { icons } from './modules/font-awesome'; 

import PageHeader from './components/PageHeader.vue';
import Frontpage from './components/Frontpage.vue';

library.add(...icons);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('page-header', PageHeader)
    .component('frontpage', Frontpage)
    .mount('#app');
