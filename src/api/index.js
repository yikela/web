import axios from 'axios'
var qs = require('qs');
const restApi = (() => {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    console.log(this.$qs);
    // axios.defaults.baseURL = '/api';
    let ajax = axios;
    const restApi = {
        // 登录
        login: {
            url: '/1/auth/login',
        },
        //发送验证码
        sendCode:{
          url:'/1/register/new-captcha'
        },
        //注册
        register:{
          url:"/1/register/add"
        },
        //找回密码
        findpwd:{
          url:'/1/register/reset-password'
        },
        //退出登陆
        logout: {
            url: '/1/auth/logout',
        },
        //判断是否登陆
        isLogin:{
            url:'/1/auth/is-logged-in'
        },
        //即将开奖
        nearClose:{
          url:"/1/sell/near-close"
        },
        //最新上架
        newsgoods:{
            url:'/1/sell/list'
        },
        //最新开奖
        winners:{
            url:'/1/sell/winners'
        },
        //商品信息
        goodDetial:{
            url:'/1/sell/detail?id={id}'
        },
        //购买信息
        boughtList:{
            url: '/1/bought/list'
        },
        //购买
        buyGoods:{
            url:'/1/sell/user-buy'
        },
        //公告列表
        noticeList:{
          url:'/1/message/list'
        },
        swiperList:{
          url:'/1/message/slide-list'
        },
        //获取充值地址
        getRechargeAd:{
          url:'/1/merchant/payment-address?session={session}&coin_type={type}'
        },
        //获取购买记录
        getPayment:{
          url:'/1/user-payment/list'
        },
        //获取资产
        assetList:{
          url:'/1/asset/list'
        },
        //获取单个币的自唱
        getCoinNUm:{
          url:'/1/asset/detail'
        },
        //获取夺宝币
        getMyCoin:{
          url:'/1/user/balance'
        },
        // 获取游戏币的汇率
        getExchangeRate:{
          url:'/1/exchange-rate/exchange-rate'
        },
        //兑换游戏币
        exchangeGameCoin:{
            url:"/1/asset/to-game-token"
        },
        //新增问题
        addIssue:{
          url:'/1/issue/add'
        },
        //编辑issue
        editIssue:{
          url:"/1/issue/edit"
        },
        //获取问题列表
        getIssueList:{
          url:'/1/issue/list'
        },
        //获取图片列表
        getIssuePic:{
          url:'/1/issue/image-list'
        },
        //获取问题详情
        getIssueInfo:{
          url:"/1/issue/detail"
        },
        //
        getCommitList:{
          url:"/1/issue/comment-list"
        },
        //是否设置资金密码
        isSetCashPwd:{
          url:'/1/payment-password/is-set'
        },
        //设置资金密码
        setCashPwd:{
          url:'/1/payment-password/new'
        },
        //提币
        merchantCash:{
          url:'/1/merchant/cash'
        },
        //提币记录
        merchantCashHistory:{
          url:'/1/merchant/cash-history'
        },
        //获取场外充值地址
        getOtcAddress:{
          url:'/1/otc/address'
        },
        //场外转账
        getOtcTransfer:{
          url:'/1/otc/transfer'
        },
        //获取用户推荐奖励
        getRefDetail:{
          url:'/1/ref/detail'
        },
        //兑换推荐奖励
        exchangeRefCash:{
          url:"/1/ref/cash"
        },
        //删除issue图片
        delIssueImage:{
          url:'/1/issue/remove-image'
        },
        get(api_url, urlParams, success){
            return ajax.get(makeApiUrl(api_url, urlParams))
        },
        delete(api_url, urlParams){
            return ajax.delete(makeApiUrl(api_url, urlParams))
        },
        post(api_url, urlParams, data, headers) {
            return ajax.post(makeApiUrl(api_url, urlParams), qs.stringify(data))
        },
        put(api_url, urlParams, data, headers){
            return ajax.put(makeApiUrl(api_url, urlParams), data)
        }

    }
    const makeApiUrl = function(apiUrl, apiParams) {
        let url = apiUrl
            // 替换ApiUrl中的参数
        for (let i in apiParams) {
            url = url.replace('{' + i + '}', apiParams[i])
        }

        return url
    }
    return restApi
})()
export default restApi