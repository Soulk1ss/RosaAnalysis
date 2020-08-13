const mongoose = require('mongoose')
const score_Schema = new mongoose.Schema(
    {
        number_people: {
            type: Number
        },
        number_score: {
            type: Number
        },
        fimal_score: {
            type: Number
        }
    },
    {
        collection: "dataForm"
    }
)

const final_score = mongoose.model('dataForm', score_Schema)

module.exports = final_score