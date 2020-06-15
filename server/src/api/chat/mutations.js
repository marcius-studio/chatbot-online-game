import {
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLID,
    GraphQLString
} from 'graphql'

import { ps } from '../schema'

import { userModel } from '../user/models'

import schema from './schema'

const updateUser = async ({ id, ...data }) => {
    return await userModel.updateOne({ _id: id }, { $set: { ...data } }).then(() => {
        ps.publish('message', { id })
        ps.publish('user', { id })
    })
}

const checkTask = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        message: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    async resolve(root, args, context) {
        const user = await userModel.findById(args.id)
        if (user) {

            const task = schema[user.level.toString()]
            const check = task.func(args.message)
            const level = (typeof task.next == 'function') ? task.next(args.message) : task.next

            if (user.level.toString() == '0') await userModel.updateOne({ _id: args.id }, { $set: { 'analytics.kvantum': args.message } })
            else if (user.level.toString() == '3') await userModel.updateOne({ _id: args.id }, { $set: { 'analytics.feedback': args.message } })
            
            if (check) return await updateUser({ id: args.id, level, score: user.score + task.score || 0 })

            return await updateUser({ id: args.id, level })
                .then(() => { throw new Error('error_task') })

        }

        throw new Error('пользователь не найден')
    }
}

const skipTask = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    async resolve(root, args, context) {
        const user = await userModel.findById(args.id)
        if (user) {
            const task = schema[user.level]
            const level = (typeof task.next == 'function') ? task.next() : task.next
            await updateUser({ id: args.id, level })
        }
    }
}

export default {
    checkTask,
    skipTask
}