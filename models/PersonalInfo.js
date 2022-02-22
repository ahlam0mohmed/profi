const mongoose = require('mongoose')

const personalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone : {
        type: Number,
        required: true
    },
    lang: {
        type: String,
        required: true
    },
})

let Personalinfo = mongoose.model('Personalinfo', personalSchema, 'personalinfo')

module.exports = Personalinfo