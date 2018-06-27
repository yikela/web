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
import newguide from '@/components/newguide/newguide'
import novicedetail from '@/components/novicedetail/novicedetail'
import newestlist from '@/components/newestlist/newestlist'
import noticedetail from '@/components/noticedetail/noticedetail'
import shopdetail from '@/components/shopdetail/shopdetail'
import newshopdetail from '@/components/newshopdetail/newshopdetail'
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
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/findPass',
      name: 'findPass',
      component: findPass
    },
    {
      path: '/newguide',
      name: 'newguide',
      component:newguide
    },
    {
      path: '/novicedetail',
      name: '/novicedetail',
      component: novicedetail
    },
    {
      path: '/newestlist',
      name: 'newestlist',
      component: newestlist
    },
    {
      path: '/noticedetail',
      name: '/noticedetail',
      component: noticedetail
    },
    {
      path: '/shopdetail',
      name: '/shopdetail',
      component: shopdetail
    },
    {
      path: '/newshopdetail',
      name : '/newhopdetail',
      component : newshopdetail
    }
  ]
})
