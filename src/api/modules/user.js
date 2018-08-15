import {post} from '../http'

export default {
    // 提交登录
    login(data) {
        return post('/mgnt/oauth/token', data)
    },

    // 退出登录
    logout(data) {
        return post('/bidding/user', data)
    }
}
