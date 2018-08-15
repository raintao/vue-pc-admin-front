<template>
    <footer class="nav-footer">
        <div class="footer-nav-group">

            <!-- 遍历出选项 -->
            <a class="footer-nav-btn span-8" 
                v-for="v in items"
                :key="'item_'+v"
                @click="clickItem(v)">
                {{ v }}
            </a>

        </div>
    </footer>
</template>

<style src="./navFooter.scss" lang="scss" scoped></style>
