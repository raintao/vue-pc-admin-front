export function getter(state, getters) {
    return getters
}

export function mutation(state, mutations) {
    return mutations
}

export function action(state, actions) {
    return actions
}

export function decorator(helper, keyMap) {
    function decoratorWrapper(a, b) {
        if (typeof b === 'string') {
            const target = a
            const key = b
            return helper(target, key)
        }

        const originKey = a
        return helper(originKey)
    }
    return decoratorWrapper
}
