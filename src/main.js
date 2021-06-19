import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import localizeFilter from '@/filters/localize.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directive/tooltip.directive'
import messagePlugin from '@/command/message.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
    apiKey: "AIzaSyBc8pJPOLcARlPl31Ws4RocmzFV_T_1E7M",
    authDomain: "vue-crm-1aa.firebaseapp.com",
    databaseURL: "https://vue-crm-1aa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-crm-1aa",
    storageBucket: "vue-crm-1aa.appspot.com",
    messagingSenderId: "223961952547",
    appId: "1:223961952547:web:8ecbb1f1fe9372d1ee5c96",
    measurementId: "G-HRSW1E3SN3"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})