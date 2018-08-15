/* 组件：头部 */
import Vue from 'src/views/base';
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './navHeader.vue'

@Component({
    name: 'navHeader',
    mixins: [template],
    components: {
    }
})
export default class NavHeader extends Vue {
    @Prop({ 
        default: '标题' 
    })
    title
    
}