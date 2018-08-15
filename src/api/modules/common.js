
import {post, get} from '../http'

export default {
    // 省市区
    getArea(data) {
        return get('/bidding-mgnt/basic', data)
    },
    /**
     * 通用portal get接口
     * 商机广场进入公共详情页  未登录状态
    */
    detailPortal(data) {
        return post('/bidding/portal?method=portal.inquiry.getDetail', data)
    }
}

