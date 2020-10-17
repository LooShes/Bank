const express = require('express')
const axios = require('axios')
const Bank = require('../model/Bank')

const router = express.Router()

router.get(`/transactions`, async (req, res) => {
    let  transactions = await Bank.find({})
    res.send(transactions)
})

router.post(`/transaction`, async (req, res) => {
    let transaction =  await new Bank(req.body)
    console.log(transaction)
    transaction.save()
    res.send("done")
})

router.delete(`/transaction/:amount`, async (req, res) => {
    const amount = req.params.amount
    await Bank.findOneAndDelete({amount: amount})
})

module.exports = router