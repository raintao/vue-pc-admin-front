<template>
    <el-breadcrumb
        class="app-breadcrumb"
        separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item
                v-for="(item, index) in levelList"
                :key="item.path"
                v-if="item.meta.title">
                <span
                    v-if="item.redirect==='noredirect' || index==levelList.length-1"
                    class="no-redirect">
                    {{ item.meta.title }}
                </span>
                <router-link
                    v-else
                    :to="item.redirect || item.path">
                    {{ item.meta.title }}
                </router-link>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<style src="./breadcrumb.scss" lang="scss" scoped></style>
