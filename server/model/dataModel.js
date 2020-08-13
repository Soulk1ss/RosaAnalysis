const mongoose = require('mongoose')
const dataUser = mongoose.Schema(
    {
        id: {
            type: String
        },
        name: {
            type: String
        },
        e_mail: {
            type: String
        },
        gender: {
            type: String
        },
        age: {
            type: Number
        },
        score_a1: {
            type: Number
        },
        score_a2: {
            type: Number
        },
        score_a3: {
            type: Number
        },
        score_a4: {
            type: Number
        },
        score_b1: {
            type: Number
        },
        score_b2: {
            type: Number
        },
        score_c1: {
            type: Number
        },
        score_c2: {
            type: Number
        },
        score_rosa: {
            type: Number
        },
        createAt: {
            type: String
        }
    },
    {
        versionKey: false
    }

);

const User = mongoose.model('collection_dataUser', dataUser);

module.exports = User;