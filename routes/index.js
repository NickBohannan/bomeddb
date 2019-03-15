import express from 'express'
import Item from '../models/item'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('landingpage')
})

router.get("/items/:id", (req, res) => {
    Item.findOne({ where: { id: req.params.id } }).then((item) => {
        res.render('individual', {
            item: item
        })
    })
})

router.get('/search', (req, res) => {
    res.render('search')
})

router.get('/add', (req, res) => {
    res.render('addpage')
})

//router.get('/results')

router.get('/all', (req, res) => {
    Item.findAll().then((items) => {
        res.render('list', {
            items: items
        })
    })
})

router.post('/add', (req, res) => {
    Item.create({
        name: req.body.name,
        catalog: req.body.catalog,
        serial: req.body.serial,
        location: req.body.location,
        note: req.body.note
    }).then(() => {
        res.render('landingpage')
    }).catch((err) => {
        console.log(err)
    })
})

export default router
