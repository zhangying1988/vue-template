<template>
    <div id="app">
        <!--  显示当前路由路径所对应的内容-->
        <router-view></router-view>
        <main-tabbar></main-tabbar>
    </div>
</template>

<script>
    import MainTabbar from "./components/content/mainTabbar/MainTabbar";
    export default {
        name: 'App',
        components: {MainTabbar},
    }
</script>

<style>


</style>
