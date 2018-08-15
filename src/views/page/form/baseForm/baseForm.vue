<template>
    <div class="form-view">
        <el-form :ref="formName" :rules="rules" :model="queryInfo" label-width="80px">
            <el-form-item
                label="活动名称"
                prop="name"
                required>
                <el-input v-model="queryInfo.name"></el-input>
            </el-form-item>

            <el-form-item
                label="活动区域"
                prop="region"
                required>
                <el-select v-model="queryInfo.region" placeholder="请选择活动区域" @change="changeSelect">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item
                label="活动时间"
                required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="queryInfo.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2" align="center">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="queryInfo.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>

            <el-form-item
                label="即时配送">
                <el-switch v-model="queryInfo.delivery"></el-switch>
            </el-form-item>

            <el-form-item
                label="活动性质"
                prop="type"
                required>
                <el-checkbox-group v-model="queryInfo.type" @change="changeCheck">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item
                label="资源"
                prop="resource"
                required>
                <el-radio-group v-model="queryInfo.resource" @change="changeRadio">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item
                label="活动形式">
                <el-input type="textarea" v-model="queryInfo.desc"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style src="./baseForm.scss" lang="scss" scoped></style>
