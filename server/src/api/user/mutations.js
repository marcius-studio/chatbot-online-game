import {
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLID,
    GraphQLString
} from 'graphql'

import { ps } from '../schema'
import sendMail from '../../modules/mail'

import { authType, signupType } from './types'
import { userModel } from './models'

const signin = {
    type: authType,
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    async resolve(root, args, context) {
        const user = await userModel.findOne({ ...args })
        if (user) return { id: user._id, access: user.access }
        throw new Error('Ошибка авторизации')
    }
}

const signup = {
    type: GraphQLBoolean,
    args: {
        data: {
            type: new GraphQLNonNull(signupType)
        }
    },
    async resolve(root, args, context) {
        const user = await userModel.findOne({ email: args.email })
        if (!user) {
            return new userModel({ ...args.data }).save()
                .then(() => ps.publish('users'))
        }

        throw new Error('Емейл уже зарегистрирован')
    }
}

const restorePassword = {
    type: GraphQLBoolean,
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    async resolve(root, args, context) {
        const password = Math.random().toString(36).slice(2)
        await userModel.updateOne({ email: args.email }, { password }).then(() =>
            sendMail({ to: args.email, subject: 'Сброс пароля "Ночь в технопарке"', text: `Ваш новый пароль: <b>${password}</b>` }))
    }
}

const updateUser = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    async resolve(root, args, context) {
        return await userModel.updateOne({ _id: args.id }, { name: args.name })
            .then(() => {
                ps.publish('user', { id: args.id })
                ps.publish('users')
            })
    }
}

export default {
    signin,
    signup,
    restorePassword,
    updateUser
}