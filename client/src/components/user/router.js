const auth = {
	path: '/auth',
	component: () => import('./auth/index.vue'),
	children: [
		{
			path: '',
			name: 'auth',
			meta: {
				name: 'Sign in',
			},
			component: () => import('./auth/signin.vue')
		},
		{
			path: 'signup',
			name: 'signup',
			meta: {
				name: 'Sign up',
			},
			component: () => import('./auth/signup.vue'),
		},
		{
			path: 'restore',
			name: 'restore-password',
			meta: {
				name: 'Restore password',
			},
			component: () => import('./auth/restorePassword.vue')
		},
	]
}


const user = {
    path: '/user',
    name: 'user',
    meta: {
        name: 'User',
        auth: true,
    },
    component: () => import('./profile/index.vue'),
}

export default [
    auth,
    user,
]