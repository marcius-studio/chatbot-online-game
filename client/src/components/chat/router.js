export default {
    path: '/chat',
    name: 'chat',
    meta: {
        name: 'Chat',
        auth: true
    },
    component: () => import('./index.vue')
}