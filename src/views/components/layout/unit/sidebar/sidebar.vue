<template>
    <div>
        <el-menu
            mode="vertical"
            unique-opened
            :default-active="$route.path"
            :collapse="sidebar.opened"
            background-color="#304156"
            text-color="#fff"
            active-text-color="#409EFF">
            <sidebar-item :routes="home"></sidebar-item>
            <sidebar-item :routes="routes"></sidebar-item>
        </el-menu>
    </div>
</template>

<style src="./sidebar.scss" lang="scss" scoped></style>
