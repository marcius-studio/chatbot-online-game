export default {
    path: '/',
    name: 'home',
    redirect: { name: 'chat' },
    meta: {
        name: 'Home',
        root: 'home',
    },
    component: { template: '<router-view/>' },
}