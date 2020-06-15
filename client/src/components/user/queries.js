import gql from 'graphql-tag'

export const user = (type) => ({
	query: gql`${type || 'query'} user($id:ID!){ user(id:$id){ _id name score level isLocal gift }}`,
	variables() {
		return {
			id: this.$store.getters.id,
		}
	},
	result({ data, loading }) {
		if (!loading) this.user = data.user
	},
	update: res => res.user,
	skip() {
		return !this.$store.getters.auth
	},
	fetchPolicy: 'cache-and-network',
})

export const users = (type) => ({
	query: gql`${type || 'query'} users{ users{ name email score level date isLocal gift textMessage analytics }}`,
	result({ data, loading }) {
		if (!loading) this.users = data.users
	},
	update: res => res.users,
	fetchPolicy: 'cache-and-network',
})

export const awards = (type) => ({
	query: gql`${type || 'query'} awards{ awards{ _id name company count price logo link }}`,
	result({ data, loading }) {
		if (!loading) this.awards = data.awards
	},
	update: res => res.awards,
	fetchPolicy: 'cache-and-network',
})