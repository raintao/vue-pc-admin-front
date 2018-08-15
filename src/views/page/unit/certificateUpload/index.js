import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './certificateUpload.vue'
import { Store as ComStore } from 'store/modules/user'

@Component({
    name: 'page-unit-certificateUpload',
    mixins: [template],
    components: {

    }
})
export default class CertificateUpload extends Vue {
    /*
    *   证件类型：
    *       idCardBefore：身份证正面
    *       idCardBack：身份证背面
    *       license：营业执照
    */
    // 用户认证状态
    @ComStore.state('certStatus') certStatus
    // 用户信息
    @ComStore.state('userID') userID
    // token
    @ComStore.getter('token') token


    @Prop({
        default: 'idCardBefore'
    }) type

    cls = {
        idCardFront: 'before',
        idCardBack: 'back',
        license: 'license'
    }

    @Prop({
        default: ''
    }) fileUrl

    // 弹框
    dialogVisible = false
    dialogImageUrl = ''
    dialogImageName = ''
    fileList = []

    get upload() {
        return {
            host: this.config.api.host,
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            data: {
                method: 'userinfo.upload.one',
                entityType: 5,
                entityId: this.$route.query.userId,
                userId: this.$route.query.userId
            },
            accept: `
                image/png,
                image/jpeg,
                image/jpg,
                application/pdf,
                application/msword,
                application/vnd.openxmlformats-officedocument.wordprocessingml.document,
                application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
                application/vnd.ms-excel,
                application/vnd.ms-excel.sheet.macroEnabled.12
                `
        }
    }

    // 图片预览
    imgPreview(file) {
        if (file.name.indexOf('.pdf') !== -1) {
            this.dialogVisible = true
            this.dialogImageName = file.name
            this.dialogImageUrl = file.response.data.filePath
        } else {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        }
    }

    // 删除图片
    imgRemove(file, fileList) {
        this.$emit('remove', file)
        this.fileList = []
    }

    // 文件上传
    imgExceed() {
        this.$message({
            type: 'warning',
            message: '每行只能上传一个附件'
        })
    }

    imgError(err) {
        let data = JSON.parse(err.message)
        if (!data.success) {
            this.$notify.error({
                title: '',
                message: data.message
            })
        }
    }

    imgProgress(index) {
        this.currentTarget.index = index
    }

    imgSuccess(res, file, fileList) {
        console.log(file)
        if (file.name.indexOf('.pdf') !== -1) {
            file.response.data.filePath = file.url
            file.url = 'http://192.168.1.242/pic/com/pdf.jpg'
            this.fileList = fileList
            this.$emit('change', res.data)
        } else {
            this.fileList = fileList
            this.$emit('change', res.data)
        }
    }

    getindexofPDF(val) {
        if (val === undefined) {
        } else {
            if (val.indexOf('.pdf') !== -1) {
                return true
            } else {
                return false
            }
        }
    }
    indexofPDF(val) {
        if (val === undefined) {
        } else {
            if (val.indexOf('.pdf') === -1) {
                return true
            }
        }
    }
    // 提交前
    beforeAvatarUpload(file, fileList) {
        const isJPG = file.type === 'image/jpeg'
        const isPNG = file.type === 'image/png'
        const isPDF = file.type === 'application/pdf'

        if (!(file.type === 'image/jpeg')) {
            if (!(file.type === 'image/png')) {
                if (this.type === 'license') {
                    if (!(file.type === 'application/pdf')) {
                        this.$message.error('上传图片只能是 JPG/PNG/PDF 格式!')
                    }
                } else {
                    this.$message.error('上传图片只能是 JPG/PNG 格式!')
                }
            }
        }
        if (this.type === 'license') {
            return isJPG || isPNG || isPDF
        } else {
            return isJPG || isPNG
        }
    }

    @Watch('fileUrl', { deep: false })
    change(val) {
        // console.log(val)
        if (val === '' || !val) {
            this.fileList = []
            // console.log(val)
        } else {
            this.fileUrl = val
            this.fileList = [
                {
                    name: this.type,
                    url: this.fileUrl
                    // fileId: '9274215247118336',
                    // response: {
                    //     data: { fileId: '9274215247118336', fileName: '1532425161772.jpg', filePath: 'http://192.168.1.242/pic/18-07-3-C-1532425161772.jpg' }
                    // }
                }
            ]
        }
    }
}
