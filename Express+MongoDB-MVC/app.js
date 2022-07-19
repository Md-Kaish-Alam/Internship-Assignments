const express = require('express')
const bodyParser = require('body-parser')
const zomatoRoutes = require('./routes/zomato')
const mongoose = require('mongoose')

const PORT = 3000
const hostName = 'localhost'


//connection with mongoDB

mongoose.connect('mongodb://localhost:27017/zomato',
()=>{
    consoe.log("mongoDB connected")
}, e => console.log(e))


var app = express()

app.use(bodyParser.json())
app.use(express.json())

app.use('/',zomatoRoutes)

app.listen(PORT , () => {
    console.log(`app is running on http://${hostName}:${PORT}/`)
})