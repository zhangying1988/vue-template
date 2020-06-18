<template>
    <tabbar>
        <tabbar-item path="/home" activeColor="blue">
            <img slot="icon" class="tabbar-img" src="../../../../src/assets/img/tabbar/index.png">
            <img slot="icon-active" class="tabbar-img" src="../../../../src/assets/img/tabbar/index-active.png">
            <div slot="txt">首页</div>
        </tabbar-item>
        <tabbar-item  path="/articles" activeColor="blue">
            <img slot="icon" class="tabbar-img" src="../../../../src/assets/img/tabbar/index.png">
            <img slot="icon-active" class="tabbar-img" src="../../../../src/assets/img/tabbar/index-active.png">
            <div slot="txt">文章</div>
        </tabbar-item>
        <tabbar-item path="/userCenter" activeColor="blue">
            <img slot="icon" class="tabbar-img" src="../../../../src/assets/img/tabbar/index.png">
            <img slot="icon-active" class="tabbar-img" src="../../../../src/assets/img/tabbar/index-active.png">
            <div slot="txt">个人中心</div>
        </tabbar-item>
    </tabbar>
</template>

<script>

    import Tabbar from "../../common/tabbar/Tabbar";
    import TabbarItem from "../../common/tabbar/TabbarItem";

    export default {
        name: "MainTabbar",
        components: {TabbarItem, Tabbar}
    }
</script>

<style scoped>

</style>
