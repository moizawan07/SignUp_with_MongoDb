const mongoose = require('mongoose')

let productSch = mongoose.Schema({
    uid: Number,
    title : String,
    description: String
})

let productModel = mongoose.model('Products',productSch)

module.exports = {productModel}