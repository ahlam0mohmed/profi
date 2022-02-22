const mongoose = require('mongoose')

const skilSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    persantage: {
        type: number,
        required: true
    },
    
})

let Skill = mongoose.model('Skill', skilSchema, 'skil')

module.exports = Skill