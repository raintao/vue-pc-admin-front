import store from 'store'

// 重新登录
export function reLogin() {
    store.dispatch('user/logout')
}

/**
    错误代码处理
*/
export function errorHandle(errCode) {
    if (!errCode) return
    switch (errCode) {
        // token 过期
        case 'isp.oauth.error.invalid_token':
            reLogin()
            break
        default:
            break
    }
}
