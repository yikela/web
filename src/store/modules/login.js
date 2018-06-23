import * as types from '../types'
import router from '../../router'
const isLoggedIn = function() {
    let token = localStorage.getItem('winchaintoken');
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
    userLoginToken: state => state.token
}

const mutations = {
    [types.USER_SIGNIN](state, user) {
        localStorage.setItem('winchaintoken', JSON.stringify(user))
        state.token = user
    },
    [types.USER_SIGNOUT](state) {
        localStorage.removeItem('winchaintoken')
        state.token = null
    }
}


const actions = {
    //普通登录
    userLogin({ commit }, data) {
        return API.post(API.login.url,{},data)
        
    },
    //登出
    userLogout({ commit }, data) {
      return API.post(API.logout.url,{},{session:data})
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}