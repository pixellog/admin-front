import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import './style.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import App from './App.vue'

Vue.config.productionTip = false

import Routes from './routes';

const scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }
    if (to.hash) {
        return {selector: to.hash};
    }
    return {x: 0, y: 0};
};
const router = new VueRouter({
    mode: 'history',
    scrollBehavior,
    routes: Routes,
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
