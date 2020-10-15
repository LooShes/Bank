const mongoose = require('mongoose')

const transactionSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String
})

const Transaction = mongoose.model('transaction', transactionSchema)

module.exports = Transaction