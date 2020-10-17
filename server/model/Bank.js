const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bankSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String
})

const Bank = mongoose.model('transaction', bankSchema)

module.exports = Bank