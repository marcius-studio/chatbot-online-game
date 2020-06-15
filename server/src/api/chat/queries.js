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

import { userModel } from '../user/models'
import { messageType } from './types'

import schema from './schema'

const message = {
    type: messageType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: async (root, args, context) => {
        const user = await userModel.findById(args.id)
        return schema[user.level]
    },
    subscribe: withFilter(() => ps.asyncIterator('message'), (payload, args, context) => payload.id == args.id),
}

export default {
    message
}