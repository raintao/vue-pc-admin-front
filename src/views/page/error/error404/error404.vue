<template>
    <div style="margin-top: -20px;">
        <div class="wscn-http404">
            <div class="pic-404">
                <img class="pic-404__parent" :src="img404" alt="404">
                <img class="pic-404__child left" :src="img404Cloud" alt="404">
                <img class="pic-404__child mid" :src="img404Cloud" alt="404">
                <img class="pic-404__child right" :src="img404Cloud" alt="404">
            </div>
            <div class="bullshit">
                <div class="bullshit__oops">OOPS!</div>
                <div class="bullshit__headline">{{ message }}</div>
                <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页</div>
                <a href="/" class="bullshit__return-home">返回首页</a>
            </div>
        </div>
    </div>
</template>

<style src="./error404.scss" lang="scss" scoped></style>
