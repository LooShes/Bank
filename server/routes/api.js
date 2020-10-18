const express = require('express')
const axios = require('axios')
const Bank = require('../model/Bank')

const router = express.Router()

router.get(`/transactions`, async (req, res) => {
    let  transactions = await Bank.find({})
    res.send(transactions)
})

router.post(`/transaction`, async (req, res) => {
    let transaction = new Bank(req.body)
    await transaction.save()
    res.send("saved")
})

router.delete(`/transaction/:id`, async (req, res) => {
    const _id = req.params.id
    await Bank.findOneAndDelete({ _id })
    res.send("deleted")
})

module.exports = router