import mongoose from 'mongoose'

import awards from './awards'

const schema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    company: {
        type: String,
        default: '',
    },
    count: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    logo: {
        type: String,
        default: null
    },
    link: {
        type: String,
    },
    textMessage: {
        type: String,
    }
})

export const awardModel = mongoose.model('awards', schema)

awardModel.countDocuments({}, (err, count) => {
    if (count == 0) return awardModel.insertMany(awards)
})