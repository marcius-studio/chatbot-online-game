import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Noname',
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        default: '0',
    },
    score: {
        type: Number,
        default: 0,
    },
    isLocal: {
        type: Boolean,
        default: false,
    },
    date: {
        type: String,
        default: Date.now,
    },
    access: {
        type: String,
        default: 'default', // admin, default
    },
    gift: {
        type: Object,
        default: {}
    },
    analytics: {
        type: Object,
        default: {}
    }
})

export const userModel = mongoose.model('users', schema)

const users = [
    {
        name: 'John Doe',
        email: 'johndoe@domain.com',
        access: 'admin',
        password: '3anp46j231',
        isLocal: true,
    },
    {
        name: 'Jane Doe',
        email: 'janedoe@domain.com',
        password: '3anp46j231',
        isLocal: true,
    },
]

userModel.countDocuments({}, (err, count) => {
    if (count == 0) return userModel.insertMany(users)
})