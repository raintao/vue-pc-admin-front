import { State, Getter, Mutation, Action, namespace } from 'vuex-class'
import keymirror from './keymirror'
import { decorator } from './vuexUtil'

export function getTypes(store) {
    return {
        state: keymirror(store.state),
        getter: keymirror(store.getters),
        mutation: keymirror(store.mutations),
        action: keymirror(store.actions)
    }
}

export function getModule(storeName) {
    return {
        State: namespace(storeName, State),
        Getter: namespace(storeName, Getter),
        Mutation: namespace(storeName, Mutation),
        Action: namespace(storeName, Action)
    }
}

export function getStore(module, types) {
    return {
        state: decorator(module.State, types.state),
        getter: decorator(module.Getter, types.getters),
        mutaion: decorator(module.Mutation, types.mutations),
        action: decorator(module.Action, types.actions)
    }
}