import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './mainContent.vue'

@Component({
    name: 'components-layout-unit-maincontent',
    mixins: [template],
    components: {
    }
})
export default class MainContent extends Vue {
}
