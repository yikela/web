import axios from 'axios'
const restApi = (() => {
    // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    // axios.defaults.baseURL = '/api';
    let ajax = axios;
    const restApi = {
        // 登录
        login: {
            url: '/1/auth/login',
        },
        //退出登陆
        logout: {
            url: '/1/auth/logout',
        },
        //判断是否登陆
        isLogin:{
            url:'/1/auth/is-logged-in'
        },
        //商品列表
        sellList:{
            url:'/1/sell/list'
        },
        //获奖者
        winner:{
            url:'/1/sell/winner'
        },
        get: function(api_url, urlParams, success) {
            return ajax.get(makeApiUrl(api_url, urlParams))
        },
        delete:function(api_url, urlParams){
            return ajax.delete(makeApiUrl(api_url, urlParams))
        },
        post: function(api_url, urlParams, data, headers) {
            return ajax.post(makeApiUrl(api_url, urlParams), data)
        },
        put:function(api_url, urlParams, data, headers){
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