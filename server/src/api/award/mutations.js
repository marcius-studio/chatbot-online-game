import {
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLID,
    GraphQLString
} from 'graphql'

import { ps } from '../schema'
import sendMail from '../../modules/mail'

import { awardModel } from './models'
import { userModel } from '../user/models'

const textMessage = (gift) => {
    return `Ваш подарок: <b>${gift.name}</b>. <br> Забрать ваш подарок можно по адресу: г.Рязань, ул. Дзержинского, д.6 до 15 июня
    с 9:00 до 17:00, предварительно связавшись по телефону 55-92-80 (доб.3). (Валентина Сергеевна, методист; Мария Геннадьевна, заместитель директора)`
}

const receiveAward = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        awardId: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    async resolve(root, args, context) {
        const award = await awardModel.findById(args.awardId)
        const user = await userModel.findById(args.id)

        if (typeof user.gift != 'null' && Object.keys(user.gift).length > 0) {
            throw new Error('У вас уже есть подарок!')
        } else if (award && award.count > 0) {
            return awardModel.updateOne({ _id: args.awardId }, { count: award.count - 1 }).then(() => {
                ps.publish('awards')

                // Custom mail for Art-Rise
                const text = award.textMessage ? award.textMessage : textMessage(award) // + '<br> <br> Спасибо за участие!'

                return userModel.updateOne({ _id: args.id }, { gift: award, score: user.score - award.price }).then(() => {
                    sendMail({ to: user.email, subject: 'Подарок "Ночь в технопарке"', text })
                    ps.publish('user', { id: args.id })
                })
            })
        }

        throw new Error('Подарок закончился..')
    }
}

export default {
    receiveAward
}