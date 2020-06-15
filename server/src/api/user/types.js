import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
	GraphQLBoolean,
} from 'graphql'
import GraphQLJSON from 'graphql-type-json'

// GraphQL Schema
const user = {
	_id: {
		type: GraphQLID,
	},
	email: {
		type: GraphQLString,
	},
	name: {
		type: GraphQLString,
	},
	level: {
		type: GraphQLString,
	},
	score: {
		type: GraphQLInt,
	},
	isLocal: {
		type: GraphQLBoolean,
	},
	gift: {
		type: GraphQLJSON
	},
	date: {
		type: GraphQLString,
	},
	textMessage: {
		type: GraphQLString,
	},
	analytics: {
		type: GraphQLJSON
	}
}

export const userType = new GraphQLObjectType({
	name: 'userType',
	fields: user,
})

export const authType = new GraphQLObjectType({
	name: 'authType',
	fields: {
		id: {
			type: GraphQLID,
		},
		access: {
			type: GraphQLString,
		}
	},
})

export const signupType = new GraphQLInputObjectType({
	name: 'signupType',
	fields: {
		name: {
			type: GraphQLString,
		},
		email: {
			type: GraphQLString,
		},
		password: {
			type: GraphQLString,
		},
		isLocal: {
			type: GraphQLBoolean,
		}
	},
})