<template>
    <div>
        <!-- 头部组件 -->
        <nav-header :title="title"></nav-header>

        <!-- 底部组件 -->
        <nav-footer :items="footerItem"></nav-footer>

        <div class="content-body">
            <list-view></list-view>
        </div>
    </div>
</template>

<style src="./list.scss" lang="scss" scoped></style>
