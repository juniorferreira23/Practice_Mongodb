const Link = require('../models/Link')

async function redirectingLink (req, res) {
        
    let title = req.params.title

    try {
        let doc = await Link.findOne({title})
        await console.log(doc)
        res.redirect(doc.url)
    } catch (error) {
        res.send(error)
    }
}

async function addLink(req, res) {

    let link = new Link(req.body)
    try {
        let doc = await link.save()
        res.send(doc)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { redirectingLink, addLink }