<template>
    <el-container>
        <el-header>
            <header-bar></header-bar>
        </el-header>
        <el-container class="app-wrapper">
            <el-aside class="sidebar-container" :class="{ 'hide-sidebar':sidebar.opened }">
                <div class="toggle-sidebar">
                     <hamburger
                        class="slide-button"
                        :toggleClick="toggleOpen"
                        :isActive="sidebar.opened"
                        style="float: left;">
                    </hamburger>
                </div>
                <sidebar></sidebar>
            </el-aside>
            <el-main>
                <nav-bar class="mb-10"></nav-bar>
                <main-content></main-content>
            </el-main>
        </el-container>
    </el-container>
</template>

<style src="./layout.scss" lang="scss" scoped></style>
