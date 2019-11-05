import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import App from './App.vue'
Vue.config.productionTip = false


import RecycleTodos from "./components/RecycleTodos";
import Todos from "./components/Todos";


const router = new VueRouter({
  routes :  [
    { path: '/', component: Todos },
    { path: '/recycle', component: RecycleTodos , name : 'recycle' , props : true}
  ],
  mode: 'history'
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
