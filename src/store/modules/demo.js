import Vuex from 'vuex'
import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
import api from 'api'

export const storeName = 'demo'

/** state **/
let state = {
    tmpList: [],
    isLoading: false
}

/** getters **/
let getters = getter(state, {

})

/** mutations **/
let mutations = mutation(state, {
    setTmpList(state, data) {
        state.tmpList = data
    }
})

/** actions **/
let actions = action(state, {
    async getTmpList({ commit }) {
        let res = await api.demo.getList()
        commit('setTmpList', res)
    },

    pageLoading({ commit }, loading) {
        state.isLoading = loading
    }
})

/** module store **/
let store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

/** exports **/
export let types = getTypes(store)
export let module = getModule(storeName)
export let Store = getStore(module, types)

export default store
