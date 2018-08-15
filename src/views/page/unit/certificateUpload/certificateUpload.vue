<template>
    <div class="certificate-upload">
        <el-upload
            :class="['upload-img', cls[type], (fileList.length > 0 ? 'have-file' : '')]"
            name="fileName"
            list-type="picture-card"
            :limit="1"
            :auto-upload="true"
            :action="upload.host + '/bidding-mgnt/file'"
            :accept="upload.accept"
            :headers="upload.headers"
            :data="upload.data"
            :before-upload="beforeAvatarUpload"
            :on-preview="imgPreview"
            :on-remove="imgRemove"
            :on-exceed="imgExceed"
            :on-success="imgSuccess"
            :on-error="imgError"
            :file-list="fileList">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" class="dialog">
            <a v-if="getindexofPDF(dialogImageName)" target="view_window" :href="dialogImageUrl">点我查看pdf图片</a>
            <img v-if="indexofPDF(dialogImageName)" :src="dialogImageUrl" alt="" style="min-width:500px;">
        </el-dialog>
    </div>
</template>

<style src="./certificateUpload.scss" lang="scss" scoped></style>
