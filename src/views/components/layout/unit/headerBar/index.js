import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './headerBar.vue'
import { Store as ComStore } from 'store/modules/user'


@Component({
    name: 'components-layout-headerbar',
    mixins: [template],
    components: {
    }
})
export default class HeaderBar extends Vue {
    @ComStore.state('userMsg') userMsg
    @ComStore.action('logout') logout

    userLogout() {
        this.confirm('确定要退出登录吗？', '退出登录').then(isOK => {
            if (isOK) {
                this.logout()
                location.reload()
            }
        })
    }
}
