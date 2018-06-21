import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        login
    },

    strict: debug
        // plugins: debug ? [createLogger()] : []
        // plugins: middlewares
})