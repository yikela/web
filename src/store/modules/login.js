import * as types from '../types'
import router from '../../router'
const isLoggedIn = function() {
    let token = localStorage.getItem('winchainuser');
    if (token) {
        return JSON.parse(token);
    } else {
        return false;
    }
}


const state = {
    token: isLoggedIn() || null,
}

const getters = {
    userLoginInfo: state => state.token
}

const mutations = {
    [types.USER_SIGNIN](state, user) {
        localStorage.setItem('winchainuser', JSON.stringify(user))
        state.token = user
    },
    [types.USER_SIGNOUT](state) {
        localStorage.removeItem('winchainuser')
        state.token = null
    }
}


const actions = {
    //普通登录
    userLogin({ commit }, data) {
        return API.post(API.login.url,{},data)
        
    },
    //登出
    userLogout({ commit }, route) {
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}