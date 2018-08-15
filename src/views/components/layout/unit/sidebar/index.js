import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './sidebar.vue'
import { Store as ComStore } from 'store/modules/common'
import SidebarItem from './sidebarItem'

@Component({
    name: 'components-layout-unit-sidebar',
    mixins: [template],
    components: {
        SidebarItem
    }
})
export default class Sidebar extends Vue {
    @ComStore.getter('sidebar') sidebar
    home = [
        {
            name: 'home',
            path: '/home',
            meta: {
                title: '工作台'
            },
            children: [
                {
                    name: 'home',
                    path: '',
                    meta: {
                        title: '工作台',
                        icon: 'home'
                    }
                }
            ]
        }
    ]


    get routes() {
        return this.$router.options.routes
    }

    created() {
    }
}
