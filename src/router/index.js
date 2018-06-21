import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import allreward from '@/components/allreward/allreward'
import reward from '@/components/reward/reward'
import treasure from '@/components/winTreasure/allList'
import login from '@/components/login/login'
import register from '@/components/register/register'
import findPass from '@/components/findPass/findPass'
import invite from '@/components/invite/invite'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/allreward',
      name: 'allreward',
      component: allreward
    },
    {
      path: '/reward',
      name: 'reward',
      component: reward
    },
    {
      path: '/invite',
      name: 'invite',
      component: invite
    },
    {
      path: '/treasure',
      name: 'treasure',
      component: treasure
    },
    {
      path: '/login',
      name: '/login',
      component: login
    },
    {
      path: '/register',
      name: '/register',
      component: register,
    },
    {
      path: '/findPass',
      name: '/findPass',
      component: findPass
    }
  ]
})
