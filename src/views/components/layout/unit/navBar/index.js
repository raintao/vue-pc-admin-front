import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './navBar.vue'
import { Store as ComStore } from 'store/modules/common'

import Hamburger from 'src/views/components/hamburger'
import Breadcrumb from 'src/views/components/breadcrumb'

@Component({
    name: 'components-layout-navbar',
    mixins: [template],
    components: {
        Hamburger,
        Breadcrumb
    }
})
export default class NavBar extends Vue {
    @ComStore.getter('sidebar') sidebar
    @ComStore.action('toggleSideBar') toggleSideBar

    toggleOpen() {
        this.toggleSideBar()
    }
}
