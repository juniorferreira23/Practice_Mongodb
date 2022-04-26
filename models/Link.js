const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({ //1 - Criar um Schema
    title: {type:String, required:true},
    description: String,
    url: {type:String, required:true},
    click: {type:Number, default:0}
})

const Link = new mongoose.model('Link', linkSchema) //2 - Criar um Modelo

module.exports = Link