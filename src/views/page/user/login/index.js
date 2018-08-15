import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './login.vue'
import { Store } from 'store/modules/user'

@Component({
    name: 'login',
    mixins: [template],
    metaInfo: {
    }
})
export default class Login extends Vue {
    userName = ''
    passWord = ''
    isLoad = false

    @Store.action('setUserMsg') setUserMsg

    async submit() {
        if (!this.userName) {
            this.toastMsg('用户名不能为空')
            return
        }
        if (this.passWord.length < 6) {
            this.toastMsg('密码为6-14位字符')
            return
        }
        this.isLoad = true
        try {
            // let resultData = await this.api.user.login({
            //     grant_type: 'password',
            //     scope: 'bidding-web',
            //     client_id: 'test',
            //     client_secret: '123456',
            //     username: this.userName,
            //     password: this.passWord
            // })
            let resultData = {
                additionalInformation: {
                    name: 'admin',
                    mobile: '18666666666',
                    userType: 3,
                    userName: 'admin',
                    userId: 10
                },
                expiration: '2018-08-20 15:26:15',
                value: 'ewerstgfrtewtre-sadg45234523564'
            }
            this.setUserMsg(resultData)
            this.isLoad = false
            this.goTo('/table')
        } catch (err) {
            this.toastMsg(err.message)
            this.isLoad = false
        }
    }

    get allHeight() {
        return document.documentElement.clientHeight
    }
}
