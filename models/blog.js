const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: string }
})

module.exports = mongoose.model('Blog', schema)