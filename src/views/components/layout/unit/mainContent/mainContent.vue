<template>
    <section>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<style src="./mainContent.scss" lang="scss" scoped></style>
