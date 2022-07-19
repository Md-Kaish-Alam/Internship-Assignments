const mongoose = require('mongoose')

const mealTypeSchema = new mongoose.Schema({

    name : String ,
    content : String
})

module.exports = mongoose.model('mealType' , mealTypeSchema , 'mealType')
