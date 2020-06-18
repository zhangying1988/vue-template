import Vue from 'vue'
import VueRouter from "vue-router";

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

const Login = () => import('../views/login/Login')//路由懒加载 分模块加载
const Home = () => import('../views/home/Home')//路由懒加载 分模块加载
const Articles = () => import('../views/articles/Articles')//路由懒加载 分模块加载
const UserCenter = () => import('../views/userCenter/UserCenter')//路由懒加载 分模块加载
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Login',
            meta: {
                title: '登录',//标题名称
                navShow: true,//是否显示头部
                isleftarrow: false,//头部是否有返回按钮
                showTab: false//表示页面是否有tabbar
            },
            component: Login
        }, {
            path: '/home',
            name: 'Home',
            meta: {
                title: '首页',//标题名称
                navShow: true,//是否显示头部
                isleftarrow: false,//头部是否有返回按钮
                showTab: false,//表示页面是否有tabbar
                keepAlive: true, // 判断该组件是否需要缓存
                isBack: false // 判断是不是返回操作
            },
            component: Home
        },
        {
            path: '/articles',
            name: 'Articles',
            meta: {
                title: '文章列表',//标题名称
                navShow: true,//是否显示头部
                isleftarrow: false,//头部是否有返回按钮
                showTab: true,//表示页面是否有tabbar
                active: 1,
                keepAlive: true, // 判断该组件是否需要缓存
                isBack: false // 判断是不是返回操作
            },
            component: Articles,
        }, {
            path: '/userCenter',
            name: 'UserCenter',
            meta: {
                title: '个人中心',//标题名称
                navShow: true,//是否显示头部
                isleftarrow: false,//头部是否有返回按钮
                showTab: true,//表示页面是否有tabbar
                active: 2
            },
            component: UserCenter
        },
    ]
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    //修改标题
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();//执行下一步
});
// // 后置钩子
// router.afterEach((to, from) => {
//
// })
export default router
