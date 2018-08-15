import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './layout.vue'
import { Store as ComStore } from 'store/modules/common'

import Sidebar from './unit/sidebar'
import HeaderBar from './unit/headerBar'
import NavBar from './unit/navBar'
import MainContent from './unit/mainContent'
import Hamburger from 'src/views/components/hamburger'

@Component({
    name: 'layout',
    mixins: [template],
    components: {
        Sidebar,
        HeaderBar,
        NavBar,
        MainContent,
        Hamburger
    }
})
export default class Layout extends Vue {
    @ComStore.getter('sidebar') sidebar
    @ComStore.action('toggleSideBar') toggleSideBar

    toggleOpen() {
        this.toggleSideBar()
    }
}
