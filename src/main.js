import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    created() {
        AOS.init()
    },
    render: h => h(App),
}).$mount('#app');
