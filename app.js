const express = require('express')
const app = express()
const mongoose = require('mongoose')
const linkRoute = require('./routes/linkRoute')

const PORT = 5000

mongoose.connect('mongodb://localhost/newlinks') //3º formar de se conectar com o banco de dados
let db = mongoose.connection
db.on('error', () => {console.log('houve um erro')})
db.once('open', () => {console.log('banco carregado')})

app.use('/', linkRoute)

app.listen(PORT, (err) => {
    if(err) throw err
    console.log(`Servidor Rodando Na Porta: ${PORT}`)
})