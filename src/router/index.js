import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Regist from '@/components/regist'
import Main from '@/components/main'
import Index from '@/components/index'
import Cart from '@/components/cart'
import My from '@/components/my'
import Search from '@/components/search'
import Group from '@/components/group'
import Brand from '@/components/brand'
import List from '@/components/list'
import Detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/regist',
      component:Regist
    },
    {
      path:'/brand',
      component:Brand
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/main',
      component:Main,
      children:[
        {path:'/index',component:Index},
        {path:'/group',component:Group},
        {path:'/search',component:Search},
        {path:'/my',component:My},
        {path:'/cart',component:Cart},

      ]
    }
  ]
})
