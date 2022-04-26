const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = 5000

const linkSchema = new mongoose.Schema({ //1 - Criar um Schema
    title: {type:String, required:true},
    description: String,
    url: {type:String, required:true},
    click: {type:Number, default:0}
})

const Link = new mongoose.model('Link', linkSchema) //2 - Criar um Modelo

// let link = new Link({ //3 - Criar o documento
//     title: "facebook",
//     description: "Link para o facebook",
//     url: "http://www.facebook.com",
// })

// link.save().then(doc => {console.log(doc)}).catch(err => {console.log(err)}) //4 - Savando o documneto no banco

// mongoose.connect('mongodb://localhost/links', (err, db) => { //1º forma de se conectar com o banco de dados
//     console.log(err)
//     console.log(db)
// })

// mongoose.connect('mongodb://localhost/links').then( db => { //2º formar de se conectar com o banco de dados
//     console.log(db)
// }).catch(err => {
//     console.log(err)
// })

mongoose.connect('mongodb://localhost/newlinks') //3º formar de se conectar com o banco de dados
let db = mongoose.connection
db.on('error', () => {console.log('houve um erro')})
db.once('open', () => {
    console.log('banco carregado')

    app.get('/:title', async (req, res) => {
        
        let title = req.params.title

        try {
            let doc = await Link.findOne({title})
            await console.log(doc)
            res.redirect(doc.url)
        } catch (error) {
            res.send(error)
        }
    })
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(PORT, (err) => {
    if(err) throw err
    console.log(`Servidor Rodando Na Porta: ${PORT}`)
})