import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

window.addEventListener('load', () => {
    function fixRem() {
        let windowWidth = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth;
        let rootSize = 28 * (windowWidth / 375);
        let htmlNode = document.getElementsByTagName("html")[0];
        htmlNode.style.fontSize = rootSize + 'px';
    }

    fixRem();
    window.addEventListener('resize', fixRem, false);
})