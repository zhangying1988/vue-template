<template>
    <div class="tabbar-item" @click="handleItem">
        <div v-if="!isActive">
            <slot name="icon"></slot>
        </div>
        <div v-else>
            <slot name="icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="txt"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        props: {
            path: String,//路径需要外部传值过来
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return {
                // isActive: true//
            }
        },
        computed: {
            isActive() {
                //home ->item1(/home)=true
                return this.$route.path.indexOf(this.path) !== -1//活跃路由是否包含当前路由
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}//活跃路由 添加样式
            }
        },
        methods: {
            handleItem() {
                console.log('itemclick')
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>

    .tabbar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }

    .tabbar-item img {
        width: 24px;
        height: 24px;
        vertical-align: center;
    }
</style>
