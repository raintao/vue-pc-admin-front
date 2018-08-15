import Vue from 'src/views/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './sidebarItem.vue'

@Component({
    name: 'components-layout-unit-sidebar-sidebaritem',
    mixins: [template],
    components: {
    }
})
export default class SidebarItem extends Vue {
    @Prop({
        type: Array,
        default: []
    })
    routes

    @Prop({
        type: Boolean,
        default: false
    })
    isNest
}
