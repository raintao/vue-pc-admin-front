export class Storage {
    constructor(keyPre = 'zh_') {
        this._keyPre = keyPre
    }

    getFullKey(key) {
        return this._keyPre + key
    }

    /**
     * 设置数据
     * @param key
     * @param val
     */
    set(key, val) {
        let jsonData = JSON.stringify(val)
        return localStorage.setItem(this.getFullKey(key), jsonData)
    }

    /**
     * 取数据
     * @param key
     * @param defaultVal
     */
    get(key, defaultVal = null) {
        let jsonData = localStorage.getItem(this.getFullKey(key))
        if (jsonData === null) {
            return defaultVal
        }
        try {
            return JSON.parse(jsonData)
        } catch (error) {
            console.log(error)
        }
        return defaultVal
    }

    /**
     * 删除数据
     * @param key
     */
    remove(key) {
        return localStorage.removeItem(this.getFullKey(key))
    }

    /**
     * 返回所有键值
     */
    keys() {
        let keys = []
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            if (key.indexOf(this._keyPre) === 0) {
                keys.push(key.replace(this._keyPre, ''))
            }
        }
        return keys
    }

    /**
     * 清空数据
     */
    clear() {
        this.keys().forEach(key => this.remove(key))
    }

    /**
     * 查找 key
     * @param keyPre
     */
    findKey(keyPre) {
        let reg = new RegExp(keyPre, 'i')
        return this.keys().filter(key => {
            return reg.test(key)
        })
    }
}

let storage = new Storage()
export default storage
