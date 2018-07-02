import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home/home'], resolve),
    },
    {
      path: '/allreward',
      name: 'allreward',
      component: resolve => require(['@/components/allreward/allreward'], resolve),
    },
    {
      path: '/my',
      name: 'my',
      component: resolve => require(['@/components/my/myself'], resolve),
      children: [
        {
          path: '/my/order/list',
          component: resolve => require(['@/components/my/order/orderList'], resolve)
        },
        {
          path: '/my/order/win',
          component: resolve => require(['@/components/my/order/winOrder'], resolve)
        },
        {
          path: '/my/orderNumber/:id',
          component: resolve => require(['@/components/my/order/myNumber'], resolve)
        },
        {
          path: '/my/cash/balance',
          component: resolve => require(['@/components/my/fundManage/accountBalance'], resolve)
        },
        {
          path: '/my/cash/detail',
          component: resolve => require(['@/components/my/fundManage/accountDetail'], resolve)
        },
        {
          path: '/my/cash/exchange/:id',
          component: resolve => require(['@/components/my/fundManage/exchange/exchange'], resolve)
        },
        {
          path: '/my/cash/recharge/:id',
          component: resolve => require(['@/components/my/fundManage/recharge/recharge'], resolve)
        },
        {
          path: '/my/cash/payment/list',
          component: resolve => require(['@/components/my/fundManage/recharge/payment'], resolve)
        },
        {
          path: '/my/cash/withdraw/:id',
          component: resolve => require(['@/components/my/fundManage/withdrawMoney/withdraw'], resolve)
        },
        {
          path: '/my/cash/withdraw/list/:id',
          component: resolve => require(['@/components/my/fundManage/withdrawMoney/withdrawRecord'], resolve)
        },
        {
          path: '/my/question/add',
          component: resolve => require(['@/components/my/question/question'], resolve)
        },
        {
          path: '/my/question/list',
          component: resolve => require(['@/components/my/question/questionList'], resolve)
        },
        {
          path: '/my/question/:id',
          component: resolve => require(['@/components/my/question/questionDetail'], resolve)
        },  
      ],
    },
    {
      path: '/reward',
      name: 'reward',
      component: resolve => require(['@/components/reward/reward'], resolve),
    },
    {
      path: '/invite',
      name: 'invite',
      component: resolve => require(['@/components/invite/invite'], resolve),
    },
    {
      path: '/treasure',
      name: 'treasure',
      component: resolve => require(['@/components/winTreasure/allList'], resolve),
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/login'], resolve),
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/register/register'], resolve),
    },
    {
      path: '/findPass',
      name: 'findPass',
      component: resolve => require(['@/components/findPass/findPass'], resolve),
    },
    {
      path: '/newguide',
      name: 'newguide',
      component: resolve => require(['@/components/newguide/newguide'], resolve),
    },
    {
      path: '/novicedetail',
      name: '/novicedetail',
      component: resolve => require(['@/components/novicedetail/novicedetail'], resolve),
    },
    {
      path: '/newestlist',
      name: 'newestlist',
      component: resolve => require(['@/components/newestlist/newestlist'], resolve),
    },
    {
      path: '/noticedetail',
      name: '/noticedetail',
      component: resolve => require(['@/components/noticedetail/noticedetail'], resolve),
    },
    {
      path: '/shopdetail',
      name: '/shopdetail',
      component: resolve => require(['@/components/shopdetail/shopdetail'], resolve),
    },
    {
      path: '/newshopdetail',
      name : '/newhopdetail',
      component: resolve => require(['@/components/newshopdetail/newshopdetail'], resolve),
    }
  ]
})
