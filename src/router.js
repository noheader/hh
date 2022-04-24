import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:"/login"
    },
    {
      path:"/home",
      component:()=>import("./views/Home.vue")
    },
    {
      path:"/login",
      component:()=>import('./views/login.vue')
    }
  ]
  
})
