import gql from 'graphql-tag'

export const message = (type) => ({
	query: gql`${type || 'query'} message($id:ID!){ message(id:$id){ message buttons response }}`,
	variables() {
		return {
			id: this.$store.getters.id,
		}
	},
	result({ data, loading }) {
		if (data && !loading) {
			this.message = data.message
		}
	},
	skip() {
		return !this.$store.getters.auth
	},
	fetchPolicy: 'cache-and-network',
})