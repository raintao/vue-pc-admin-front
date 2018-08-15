<template>
    <div class="login-view" v-loading="isLoad">
        <div class="login-body">
            <el-row>
                <el-col :span="12">
                    <div class="title">
                        <h2>后台管理系统</h2>
                    </div>
                    <div class='login'>
                        <h1>admin</h1>
                        <p>帐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</p>
                        <input type="text" v-model.trim="userName" maxlength="14" placeholder="请输入用户名"><br>
                        <p>登录密码</p>
                        <input type="password" @keyup.enter="submit" v-model.trim="passWord" maxlength="14" placeholder="请输入密码"><br>
                        <button  @click="submit">登&nbsp;&nbsp;录</button>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="bgimg"></div>
                </el-col>
            </el-row>         
        </div>
    </div>
</template>

<style src="./login.scss" lang="scss" scoped></style>
