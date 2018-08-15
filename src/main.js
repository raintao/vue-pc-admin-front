import 'babel-polyfill'
import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'

import 'normalize.css/normalize.css'
import 'ui/element'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'

import router from './router'
import store from 'store'
import App from 'src/views/app'
import 'src/style/app.scss'

// import all icons
import * as svgicon from 'vue-svgicon'
import './views/icons'
Vue.use(svgicon, {
    tagName: 'icon'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
