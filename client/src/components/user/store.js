import router from "../../router";

const auth = {
	state: {
		id: null,
		access: null,
	},
	mutations: {
		login(state, { id, access = 'default' }) {
			state.id = id
			state.access = access

			// Если был перенаправлен с закрытой страницы вернем на нее или в ROOT
			let route = JSON.parse(window.localStorage.getItem('route'))
			router.push(route ? route.fullPath : { name: 'home' })
		},
		logout(state) {
			router.push({ name: 'auth' })
			state.id = null
		},
	},
	getters: {
		auth: state => !!state.id,
		id: state => state.id,
		isAdmin: state => state.access == 'admin',
	},
}

export default {
	auth
}