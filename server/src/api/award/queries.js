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

import { awardModel } from './models'
import { awardType } from './types'

const awards = {
    type: new GraphQLList(awardType),
    resolve: async (root, args, context) => await awardModel.find().sort('-price').exec(),
    subscribe: () => ps.asyncIterator('awards'),
}

export default {
    awards
}