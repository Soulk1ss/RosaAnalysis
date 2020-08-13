const express = require('express');
const router = express.Router();

const Data = require('../model/dataModel');
const Score = require('../model/final_scoreModel')
const genPDF = require('./createPDF')

router.post('/', (req, res) => {

    const obj = new Data(req.body)

    obj.save((err, result) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            Data.find({ score_rosa: { $gte: 5 } }).exec((err, number_score) => {
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    Data.count({}).distinct('id').exec((err, number_people) => {
                        if (err) {
                            return res.status(400).send(err);
                        }
                        Score.findByIdAndUpdate(
                            { _id: "5f2424cee14c417e1775cc3b" },
                            {
                                number_score: number_score.length,
                                number_people: number_people.length,
                                fimal_score: (number_score.length / number_people.length) * 100
                            }
                        ).exec((err, result) => {
                            if (err) {
                                return res.status(400).send(`อัพเดตผิดพลาด ${err}`)
                            }
                            genPDF.createPDF(req.body)
                            res.status(200).send('สำเร็จ');

                        })
                    })
                }
            })
        }

    })
})


module.exports = router

