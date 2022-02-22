const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    persantage: {
        type: number,
        required: true
    },
    
})

let Services = mongoose.model('Services', serviceSchema, 'services')

module.exports = Services