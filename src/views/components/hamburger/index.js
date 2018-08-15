import Vue from 'src/views/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './hamburger.vue'

@Component({
    name: 'components-hamburger',
    mixins: [template]
})
export default class Hamburger extends Vue {
    @Prop({
        type: Boolean,
        default: false
    })
    isActive

    @Prop({
        type: Function,
        default: () => {}
    })
    toggleClick
}
