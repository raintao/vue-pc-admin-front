<template>
    <div>

        <!-- 控制按钮 -->
        <el-row>
            <el-col :span="14" align="left">
                <el-input v-model="queryInfo.search" placeholder="搜索内容" style="width: 300px;"></el-input>
                <el-button style="margin-left: 5px;">搜索</el-button>
                <el-button style="margin-left: 5px;">高级筛选</el-button>
            </el-col>
            <el-col :span="10" align="right">
                <el-button>导出</el-button>
            </el-col>
        </el-row>
        <!-- / 控制按钮 -->

        <!-- table -->
        <el-table
            v-loading="isLoading"
            class="mt-10"
            :data="tableData"
            stripe
            style="width: 100%;">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120">
            </el-table-column>
            <el-table-column
                show-overflow-tooltip
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                width="120">
            </el-table-column>
            <el-table-column
                label="状态"
                width="100">
                <template slot-scope="scope">
                    <el-tag
                        v-if="state[scope.row.state]"
                        :type="state[scope.row.state].cls">
                        {{ state[scope.row.state].text }}
                    </el-tag>
                    <el-tag
                        v-else
                        type="info">
                        未定义
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                width="160">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="editInfo(scope.$index, scope.row)">
                        编辑
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="deleteInfo(scope.$index, scope.row)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- / table -->

        <!-- 分页 -->
        <el-row class="mt-20">
            <el-col :span="24" align="right">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="100">
                </el-pagination>
            </el-col>
        </el-row>
        <!-- / 分页 -->

        <!-- dialog -->
        <el-dialog title="编辑内容" :visible.sync="showDialog">

            <el-form ref="formdig" :model="formDialog" label-width="80px">
                <el-form-item label="名称">
                    <el-input v-model="formDialog.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="formDialog.address"></el-input>
                </el-form-item>
                <el-form-item label="日期">
                    <el-date-picker
                        v-model="formDialog.date"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="状态">
                    <el-input v-model="formDialog.state"></el-input>
                </el-form-item>
            </el-form>

            <el-row>
                <el-col :span="24" align="right">
                    <el-button @click="cancelEdit">取消</el-button>
                    <el-button type="primary" @click="confirmEdit">确定</el-button>
                </el-col>
            </el-row>
        </el-dialog>
        <!-- / dialog -->
    </div>
</template>

<style src="./normal.scss" lang="scss" scoped></style>
