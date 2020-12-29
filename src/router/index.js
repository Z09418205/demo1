import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Search from './../components/Search'
import HomePage from './../components/HomePage'
import Login from './../components/Login'
import Order from './../components/Order'
import Register from './../components/Register'
import ShopCar from './../components/ShopCar'
import HotCard from './../components/HotCard'
import Details1 from './../components/Details1'
import Details2 from './../components/Details2'
import Details3 from './../components/Details3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ShopCar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/HotCard',
      name: 'HotCard',
      component: HotCard
    },
    {
      path: '/Details1',
      name: 'Details1',
      component: Details1
    },
    {
      path: '/Details2',
      name: 'Details2',
      component: Details2
    },
    {
      path: '/Details3',
      name: 'Details3',
      component: Details3
    }
  ]
})
