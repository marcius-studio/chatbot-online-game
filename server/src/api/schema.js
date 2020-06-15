import {
	GraphQLObjectType,
	GraphQLSchema,
} from 'graphql'

import { PubSub } from 'graphql-subscriptions'
export const ps = new PubSub()

// Queries, Mutations, Subscription endpoints
import userQueries from './user/queries'
import userMutations from './user/mutations'

import chatQueries from './chat/queries'
import chatMutations from './chat/mutations'

import awardQueries from './award/queries'
import awardMutations from './award/mutations'

export const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: {
			...userQueries,
			...chatQueries,
			...awardQueries,
		},
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: {
			...userMutations,
			...chatMutations,
			...awardMutations,
		}
	}),
	subscription: new GraphQLObjectType({
		name: 'Subscriptions',
		fields: {
			...userQueries,
			...chatQueries,
			...awardQueries,
		},
	}),
})