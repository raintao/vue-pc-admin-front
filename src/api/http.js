import axios from 'axios'
import * as md5 from 'md5'
import stringify from 'qs/lib/stringify'
import config from 'common/config'
import { Notification as $notify } from 'element-ui'
import store from 'store'
import storage from '../unit/storage'
import { errorHandle } from './errorHandle'


const host = config.api.host

// build http header
function buildHeader(option = {}) {
    let token = !store ? storage.get('token') || '' : store.state.user.token || ''
    if (!token) return {}
    let headers = {
        Authorization: `Bearer ${token}`
    }

    if (option) {
        headers = { ...headers, ...option }
    }
    return headers
}

function handleError (err = {}) {
    let errorCode = err.errorCode
    // 如果是手动取消的请求，不显示错误信息
    if (axios.isCancel(errorCode)) {
        console.log(errorCode)
    } else {
        // 错误处理
        errorHandle(errorCode)
        let msg = err.message || '发生未知错误，请重试'
        if (('' + errorCode).indexOf('timeout') > -1) {
            msg = '加载超时！请检查你的网络'
        }
        $notify.error({
            title: '',
            message: msg
        })
    }
}

function processData(apiData = {}) {
    let data = { ...apiData }
    return data
}

function transformResponse(data) {
    if (data) {
        if (data.success) {
            let res = data.data
            return res
        } else {
            handleError(data)
            let msg = data.message || '发生未知错误，请重试'
            throw new Error(msg)
        }
    } else {
        let msg = 'Unknow Error'
        throw new Error(msg)
    }
}

// axios配置
let axiosConfig = (option = {}) => {
    return {
        baseURL: host,
        headers: buildHeader(option),
        timeout: 10000,
        responseType: 'json',
        transformRequest: [function (data) {
            if (data instanceof FormData) {
                return data
            } else {
                let contType = option['Content-Type']
                if (contType && contType.indexOf('application/json') > -1) {
                    return JSON.stringify(data)
                } else {
                    return stringify(data)
                }
            }
        }],
        transformResponse: [function (data) {
            return transformResponse(data)
        }]
    }
}

// export let ax = axios.create({
//     baseURL: host,
//     headers: buildHeader(),
//     timeout: 10000,
//     responseType: 'json',
//     transformRequest: [function (data) {
//         if (data instanceof FormData) return data
//         return stringify(data)
//     }],
//     transformResponse: [function (data) {
//         return transformResponse(data)
//     }]
// })

// ax.interceptors.response.use(function (res) {
//     // let headers = res.headers
//     return res
// })

// http get method
export function get(url, data) {
    let nax = axios.create(axiosConfig())
    return nax.get(`${host}${url}`, {
        params: processData(data)
    }).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

// http post method
export function post(url, data) {
    let nax = axios.create(axiosConfig())
    return nax.post(`${host}${url}`, processData(data)).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

// post Json
export function postJson(url, data) {
    let nax = axios.create(axiosConfig({
        'Content-Type': 'application/json;charset=utf-8'
    }))
    return nax.post(`${host}${url}`, processData(data)).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

// http delete methoda
export function del(url, data) {
    let nax = axios.create(axiosConfig())
    return nax.delete(`${host}${url}`, {
        params: processData(data)
    }).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}
