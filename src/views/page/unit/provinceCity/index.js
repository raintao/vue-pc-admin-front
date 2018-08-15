import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './provinceCity.vue'

@Component({
    name: 'provinceCity',
    mixins: [template],
    components: {

    }
})
export default class ProvinceCity extends Vue {
    // 省市区列表
    provinceList = []
    cityList = []
    areaList = []

    @Prop({
        default: (() => {
            return {
                province: {
                    dictId: '',
                    itemName: ''
                },
                city: {
                    dictId: '',
                    itemName: ''
                },
                area: {
                    dictId: '',
                    itemName: ''
                }
            }
        })
    })
    defaultProvinceCity


    get provinceCity() {
        let tempObj = {
            province: {
                dictId: '',
                itemName: ''
            },
            city: {
                dictId: '',
                itemName: ''
            },
            area: {
                dictId: '',
                itemName: ''
            }
        }
        let val = this.defaultProvinceCity ? this.defaultProvinceCity : tempObj
        return {
            province: { ...val.province },
            city: { ...val.city },
            area: { ...val.area }
        }
    }

    @Watch('defaultProvinceCity', {deep: true})
    changeShow(val) {
        this.provinceChange(val.province)
        this.cityChange(val.city)
        this.areaChange(val.area)
    }

    provinceChange(val) {
        this.provinceCity.province = {...val}
        this.provinceCity.city = {
            dictId: '',
            itemName: ''
        }
        this.provinceCity.area = {
            dictId: '',
            itemName: ''
        }
        this.getCity(val.dictId)
        this.$emit('areaChange', this.provinceCity)
    }

    cityChange(val) {
        this.provinceCity.city = {...val}
        this.provinceCity.area = {
            dictId: '',
            itemName: ''
        }
        this.getArea(val.dictId)
        this.$emit('areaChange', this.provinceCity)
    }

    areaChange(val) {
        this.provinceCity.area = {...val}
        this.$emit('areaChange', this.provinceCity)
    }

    async getProvince() {
        try {
            this.provinceList = await this.api.common.getArea({
                method: 'basic.dict.getProvince'
            })
        } catch (err) {
            console.log(err)
        }
    }

    async getCity(id) {
        try {
            this.cityList = await this.api.common.getArea({
                method: 'basic.dict.getByParentId',
                parentId: id
            })
        } catch (err) {
            console.log(err)
        }
    }

    async getArea(id) {
        try {
            this.areaList = await this.api.common.getArea({
                method: 'basic.dict.getByParentId',
                parentId: id
            })
        } catch (err) {
            console.log(err)
        }
    }

    created () {
        this.getProvince()
    }
}
