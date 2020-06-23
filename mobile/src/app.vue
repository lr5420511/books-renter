<template>
    <div id="root">
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import url(./assets/less/variables.less);
@import url(./assets/less/mixins/device-mx.less);
@import url(./assets/less/mixins/fill-mx.less);
@import url(./assets/less/mixins/flex-mx.less);
@import url(./assets/less/mixins/font-mx.less);

// 注册字体
.font-mx(@v-font-family);

// 多移动设备适配
.device-mx(@v-devices, @v-rem-percent);

body {
    .flex-mx();
    margin: 0;
    background-color: extract(@v-colors, 5);
    font-family: sans-serif, @v-font-family;
    font-size: @v-font-size;
    color: extract(@v-colors, 3);
    ul, li {
        margin: 0;
        padding: 0;
    }
    a {
        .fill-mx();
        text-decoration: none;
        color: extract(@v-colors, 3);
    }
}
</style>

<style lang="less" scoped>
@import url(./assets/less/variables.less);
@import url(./assets/less/mixins/flex-mx.less);

div#root {
    .flex-mx();
}
</style>