
import {post, get} from '../http'

export default {
    // 省市区
    getArea(data) {
        return get('/mgnt/basic', data)
    }

}

