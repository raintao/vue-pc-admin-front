import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './list.vue'

import NavHeader from '../unit/navHeader'  // 引入头部组件
import NavFooter from '../unit/navFooter'  // 引入底部组件
import ListView from './unit/listView'      // 引入列表

@Component({
    name: 'list',
    mixins: [template],
    components: {
        NavHeader,
        NavFooter,
        ListView
    }
})
export default class List extends Vue {
    title = '列表页面demo1'
    // 底部选项
    footerItem = [
        '底部选项1',
        '底部选项2',
        '底部选项3'
    ]

    created() {
        console.log('刷新：列表')
        // console.log(this.title)
    }
}
