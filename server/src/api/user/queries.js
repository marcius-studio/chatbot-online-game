import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLString
} from 'graphql'
import { withFilter } from 'graphql-subscriptions'

import { ps } from '../schema'

import { userModel } from './models'
import { userType } from './types'

const user = {
    type: userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve: async (root, args, context) => await userModel.findById(args.id).exec(),
    subscribe: withFilter(() => ps.asyncIterator('user'), (payload, args, context) => payload.id == args.id),
}

const users = {
    type: new GraphQLList(userType),
    args: {
        limit: {
            type: GraphQLInt,
        }
    },
    resolve: async (root, args, context) => await userModel.find().sort('-date').exec(),
    subscribe: () => ps.asyncIterator('users'),
}

export default {
    user,
    users
}