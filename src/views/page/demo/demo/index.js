import Vue from 'src/views/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './demo.vue'

import storage from 'src/unit/storage'
import { Store } from 'store/modules/demo'

import NavHeader from '../unit/navHeader'
import NavFooter from '../unit/navFooter'

@Component({
    name: 'demo',
    mixins: [template],
    components: {
        NavHeader,
        NavFooter
    }
})
export default class Demo extends Vue {
    listLoading = false
    title = '头部组件'
    msg = '项目页'
    list = []
    txt = ''
    // 底部选项
    footerItem = [
        '底部选项1',
        '底部选项2',
        '底部选项3'
    ]
    storTest = ''

    set testTxt(txt) {
        this.txt = txt
    }
    get testTxt() {
        return this.txt + '-t'
    }

    // Store
    @Store.state('isLoading') isLoading
    @Store.action('getTmpList') getTmpList
    @Store.action('pageLoading') pageLoading

    // 改变标题
    changeTitle() {
        this.title = '标题已改变'
    }

    // 点击底部选项
    clickButtonItem(itemName) {
        console.log('点击选项：' + itemName)
    }

    // 改变加载中状态
    changeLoading() {
        this.pageLoading(true)
        let self = this
        setTimeout(() => {
            self.pageLoading(false)
        }, 2000)
    }

    // 跳转
    runGoTo1() {
        this.goTo('list')
    }
    // 跳转
    runGoTo2() {
        this.goTo({
            path: 'otherPage/list',
            query: {
                id: '1'
            }
        })
    }

    // 独立获取数据
    async getList(data) {
        this.listLoading = true
        try {
            this.list = await this.api.demo.getList(data)
            console.log('列表加载成功!')
            this.listLoading = false
        } catch (err) {
            this.listLoading = false
        }
    }

    // storage test ------------------------
    // 写入storage
    setStorageTest(txt = 'test') {
        storage.set('stoageTest', txt)
        this.storTest = storage.get('stoageTest')
    }

    // 删除storage
    removeStorageTest() {
        storage.remove('stoageTest')
        if (!storage.get('stoageTest')) {
            this.storTest = ''
        }
    }

    // 监听信息 ------------------------
    @Watch('msg', {
        deep: true,     // 是否深度监听
        immediate: true // 是否在方法声明时先执行一次
    })
    changeMsg(val) {
        console.log(val)
    }


    // 代码规范测试区域：此方法内代码有报红时，代码规范检测功能正常。 ---------------------
    codeTest() {
        let ary=['a','b'];
        if(ary){
            console.log(ary)
        }
        let fn1 = (num) => {
            let fntest = num > 0 ? true : false
            let fntest2 = 'aa'
            let ary_3 = [ '1', '2' ]
            console.log(ary_3)
            return fntest + fntest2
        }
        fn1()
    }

    createLetter() {
        let letterBig = 'QWERTYUIOPASDFGHJKLZXCVBNNM'
        let letterMin = letterBig.toLowerCase()
        let limitBig = (() => {
            let obj = {}
            'GUKQTMOSL'.split('').forEach(k => { obj[k] = true })
            return obj
        })()
        let limitMin = (() => {
            let obj = {}
            'qwertxlqx'.split('').forEach(k => { obj[k] = true })
            return obj
        })()
        let bigLet = 2000000
        let minLet = 1000000
        let text = []

        console.time('letter')
        // big
        for (let i = 0; i < bigLet; i++) {
            let letter = letterBig[Math.floor(Math.random() * 24)]
            text.push(letter)
        }
        // min
        for (let i = 0; i < minLet; i++) {
            let letter = letterMin[Math.floor(Math.random() * 24)]
            let index = Math.floor(Math.random() * bigLet)
            let target = text[index]
            // 处理大小写
            if (limitBig[target] === true) {
                letter = letter.toUpperCase()
            } else if (limitMin[target] === true) {
                letter = letter.toLowerCase()
            }
            text[index] = target + letter
        }
        let newText = text.join('')
        console.log(newText.length)
        console.log(newText)
        console.timeEnd('letter')
    }

    // 约定放置于底部
    created() {
        // this.createLetter()
        // console.log(this.isLoading)
        // this.getTmpList()
    }
}
