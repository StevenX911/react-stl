
// 路由：1. 公共路由 2. 私有路由

import { Article, Login, NotFound, Dashboard, Setting } from '../views'

const commonRoutes = [{
    pathname: '/login',
    component: Login,
    title: '登录',
    icon: 'edit',
    isTop: true
},
{
    pathname: '/404',
    component: NotFound,
    title: '404',
    icon: 'edit',
    isTop: true
}
];


const privateRoutes = [
{
    pathname: '/admin/dashboard',
    component: Dashboard,
    title: '仪表盘',
    icon: 'home',
    isTop: true
},
{
    pathname: '/admin/article',
    component: Article,
    title: '文章管理',
    icon: 'edit',
    isTop: true
},
{
    pathname: '/admin/setting',
    component: Setting,
    title: '设置',
    icon: 'setting',
    isTop: true
},
];

export {
    commonRoutes,
    privateRoutes
}