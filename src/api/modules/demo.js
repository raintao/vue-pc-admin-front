
import { post, get } from '../http'

export default {
    // 获取接口数据
    getList(data) {
        return get('/page/list', data)
    },

    // 提交信息
    sendInfo(data) {
        return post('/user/info', data)
    }
    
}
