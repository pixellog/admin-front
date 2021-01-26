// import NotFound from '@/pages/404';
// import Login from '@/pages/login';
// import Main from '@/pages/main';
import PackageList from "@/pages/product/package/list";
import PackageRegist from "@/pages/product/package/regist";

/*
const User = {
    template: `<div>test <router-view></router-view></div>`
}
*/

export default [
    {title: '패키지 목록', path: '/package/list', component: PackageList},
    {title: '패키지 등록', path: '/package/regist', component: PackageRegist},
    /*{
        title: 'user', path: '/user/:id', component: User,
        children: [
            {title: 'profile', path: 'profile', component: PackageList},
            {title: 'posts', path: 'posts', component: PackageRegist}
        ]
    },*/
    // {title: '메인', path: '/', component: PackageList},
    // {title: '로그인', path: '/login', component: Login},
    // {title: '404', path: '*', component: NotFound}
];
