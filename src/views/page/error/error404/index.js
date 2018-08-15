import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './error404.vue'

import img404 from 'src/assets/404_images/404.png'
import img404Cloud from 'src/assets/404_images/404_cloud.png'

@Component({
    name: 'error-404',
    mixins: [template]
})
export default class Error404 extends Vue {
    img404 = img404
    img404Cloud = img404Cloud

    get message() {
        return '并不存在你想进的页面......'
    }
}
