import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

Vue.component('fai', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VModal);

new Vue({
    render: h => h(App),
}).$mount('#app')
