const express = require('express')
const router = express.Router()
const { redirectingLink, addLink } = require('../controllers/linkController')

router.get('/:title', (req, res) => {
    redirectingLink(req, res)
})

router.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

router.post('/', express.urlencoded({extended: true}) ,(req, res) => {
    addLink(req, res)
})

module.exports = router
