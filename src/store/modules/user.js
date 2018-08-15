import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
import storage from 'src/unit/storage'
import router from '../../router'


export const storeName = 'user'

/** state **/
let state = {
    userID: storage.get('userID'),
    userMsg: storage.get('userMsg'),
    token: storage.get('token')
}

/** getters **/
let getters = getter(state, {
    userID: state => state.userID,
    userMsg: state => state.userMsg,
    token: state => state.token
})

/** mutations **/
let mutations = mutation(state, {
    setUserMsg(state, data) {
        state.userMsg = data
        state.token = data.value
        storage.set('userMsg', data)
        storage.set('token', data.value)
    },
    setUserID(state, data) {
        state.userID = data
        storage.set('userID', data)
    },
    logout(state) {
        state.userMsg = null
        state.token = null
        storage.remove('userMsg')
        storage.remove('token')
        storage.remove('userID')
        router.push('/login')
    }

})

/** actions **/
let actions = action(state, {
    setUserMsg({ commit }, res) {
        commit('setUserMsg', res)
    },
    setUserID({ commit }, res) {
        commit('setUserID', res)
    },
    logout({ commit }) {
        commit('logout')
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
