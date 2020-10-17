const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./server/routes/api')

const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(express.static(path.join(__dirname, './node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', api)

mongoose.connect('mongodb://localhost/bank', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log(`DB Connected!`))

const port = 8000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})