import Vue from 'src/views/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './breadcrumb.vue'

@Component({
    name: 'components-breadcrumb',
    mixins: [template],
    components: {
    }
})
export default class Breadcrumb extends Vue {
    levelList = null

    // 获取路径
    getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0]
        // if (first && first.name !== 'home') {
        //     matched = [{
        //         path: '/home',
        //         meta: { title: 'home' }
        //     }].concat(matched)
        // }
        this.levelList = matched
    }

    @Watch('$route', { deep: false })
    changeRoute() {
        this.getBreadcrumb()
    }

    created() {
        this.getBreadcrumb()
    }
}
