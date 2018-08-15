<template>
    <div>
        <ul class="test-list">
            <li v-for="n in listNum"
                :key="n"
                @click="changeTitle(n)">
                test{{ n }}
            </li>
        </ul>
        <h2 @click="addList">增加列表数据</h2>
        <h2 @click="goTo('/otherPage/list')">跳转{{titleNum}}</h2>
    </div>
</template>

<style src="./listView.scss" lang="scss" scoped></style>
