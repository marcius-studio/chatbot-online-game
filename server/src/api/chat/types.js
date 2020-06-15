import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
} from 'graphql'


const message = {
	message: {
		type: GraphQLID,
	},
	buttons: {
		type: new GraphQLList(GraphQLString)
	},
	response: {
		type: GraphQLString
	},
}

export const messageType = new GraphQLObjectType({
	name: 'messageType',
	fields: message,
})