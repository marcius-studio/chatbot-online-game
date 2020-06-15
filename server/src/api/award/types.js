import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
} from 'graphql'


const award = {
	_id: {
		type: GraphQLID
	},
	name: {
		type: GraphQLString,
	},
	company: {
		type: GraphQLString
	},
	count: {
		type: GraphQLInt
	},
	price: {
		type: GraphQLInt
	},
	logo: {
		type: GraphQLString
	},
	link: {
		type: GraphQLString
	},
	textMessage: {
		type: GraphQLString
	},
}

export const awardType = new GraphQLObjectType({
	name: 'awardType',
	fields: award,
})