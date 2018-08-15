import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './listView.vue'

@Component({
    name: 'listListView',
    mixins: [template],
    components: {
    }
})
export default class ListView extends Vue {
    titleNum = ''
    listNum = 5

    changeTitle(num) {
        this.titleNum = '' + num
    }

    addList() {
        this.listNum = 20
    }
}
