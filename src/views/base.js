import Vue from 'vue'
import api from 'api'
import config from 'common/config'
import { MessageBox } from 'element-ui'
import { dateFormat } from 'common/filters'


export default class Base extends Vue {
    api = api
    config = config
    dateFormat = dateFormat

    // 页面跳转
    goTo (options) {
        this.$router.push(options)
    }

    // 提示信息
    toastMsg (msg, type) {
        MessageBox({
            message: msg,
            type: type || 'warning',
            showClose: true
        })
    }

    /**
     * sleep 定时器
     * @param {number} time
     * @returns {Promise}
     */
    sleep(time = 0) {
        return new Promise((resolve) => {
            let timeId = setTimeout(function () {
                resolve(timeId)
            }, time)
        })
    }

    /**
     * confirm
     * @param {string} message  确认内容
     * @param {string} title    标题
     * @param {object} options  confirm参数
     * @return {Promise}
     * @example
     *  this.confirm('确认').then(confirm => {
     *      if (confirm) {
     *          ...
     *      }
     *  })
     */
    confirm(message, title = '提示', options) {
        let defOpts = {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            confirmButtonClass: 'el-button--danger',
            customClass: 'message-box',
            type: 'warning'
        }
        defOpts = { ...defOpts, ...options }
        return new Promise(async (resolve) => {
            try {
                await MessageBox.confirm(message, title, defOpts)
            } catch (error) {
                resolve(false)
                return
            }
            resolve(true)
        })
    }

    /**
     * validate form
     * @param formName
     */
    validate(refName) {
        return new Promise((resolve) => {
            let ref = refName
            if (typeof refName === 'string') {
                ref = this.$refs[refName]
            }
            ref.validate((valid) => {
                resolve(valid)
            })
        })
    }

    /**
     * 金额格式化 val  true表示以元为单位 num true表示不要小数点
     * @param {string} str
     * @param {boolean} val
     */
    moneyFormate(str, val, num) {
        if (str == 0) {
            return {
                unit: '万',
                money: num ? 0 : '0.00'
            }
        }
        let resultObj = {}
        let  plus = ''
        if (str < 0) {
            str = -str
            plus = '-'
        }
        if (str >= 10000 && !val) {
            resultObj.unit = '万'
            str = (str / 10000).toFixed(2)
        } else {
            resultObj.unit = '元'
        }
        str = String(str).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        if (num) {
            let a = str.indexOf('.')
            let i = a > -1 ? a  : str.length
            str = str.substring(0, i)
        }
        resultObj.money = plus + str
        return resultObj
    }
}

