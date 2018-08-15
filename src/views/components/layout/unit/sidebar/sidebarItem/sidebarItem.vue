<template>
    <div>
        <template v-for="item in routes" v-if="!item.hidden && item.children">

            <!-- 如果只有一个子菜单或者无子菜单的情况下，直接只显示1级菜单链接 -->
            <router-link
                v-if="item.children.length === 1 && !item.children[0].children && !item.alwaysShow"
                :to="item.path + '/' + item.children[0].path"
                :key="item.children[0].name">
                <el-menu-item
                    :index="item.path + '/' + item.children[0].path"
                    :class="{'submenu-title-noDropdown' : !isNest}">
                    <icon
                        v-if="item.children[0].meta && item.children[0].meta.icon"
                        :icon="item.children[0].meta.icon"
                        width="20px">
                    </icon>
                    <span
                        v-if="item.children[0].meta && item.children[0].meta.title">
                        {{ item.children[0].meta.title }}
                    </span>
                </el-menu-item>
            </router-link>

            <!-- 有多个子菜单的情况下，显示2级菜单 -->
            <el-submenu
                v-else
                :index="item.name || item.path"
                :key="item.name">
                <template slot="title">
                    <icon
                        v-if="item.meta && item.meta.icon"
                        :icon="item.meta.icon"
                        width="20px">
                    </icon>
                    <span v-if="item.meta && item.meta.title">{{ item.meta.title }}</span>
                </template>

                <template
                    v-for="child in item.children"
                    v-if="!child.hidden">
                    <sidebar-item
                        v-if="child.children && child.children.length > 0"
                        :is-nest="true" class="nest-menu"
                        :routes="[child]"
                        :key="child.path">
                    </sidebar-item>
                    <router-link
                        v-else
                        :to="item.path + '/' + child.path"
                        :key="child.name">
                        <el-menu-item :index="item.path + '/' + child.path">
                            <icon
                                v-if="child.meta && child.meta.icon"
                                :icon="child.meta.icon"
                                width="20px">
                            </icon>
                            <span v-if="child.meta && child.meta.title">{{ child.meta.title }}</span>
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>

        </template>
    </div>
</template>

<style src="./sidebarItem.scss" lang="scss" scoped></style>
