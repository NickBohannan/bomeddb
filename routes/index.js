import express from 'express'
import Item from '../models/item'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('landingpage')
})

router.get("/items/:id", (req, res) => {
    Item.findOne({ where: { id: req.params.id } })
    .then(item => {
        res.render('individual', {
            item: item
        })
    }).catch(err => {
        console.log(err)
    })
})

router.get('/search', (req, res) => {
    res.render('search')
})

router.post('/search', (req, res) => {
    let selectedType
    if (req.body.name === "on") {
        Item.findAll({ where: { name: req.body.search}})
        .then(items => {
            res.render('list', {
                items: items
            })
        }).catch(err => {
            console.log(err)
        })
    }
    if (req.body.catalog === "on") {
        Item.findAll({ where: { catalog: req.body.search}})
        .then(items => {
            res.render('list', {
                items: items
            })
        }).catch(err => {
            console.log(err)
        })
    }
    if (req.body.serial === "on") {
        Item.findAll({ where: { serial: req.body.search}})
        .then(items => {
            res.render('list', {
                items: items
            })
        }).catch(err => {
            console.log(err)
        })
    }
    if (req.body.location === "on") {
        Item.findAll({ where: { location: req.body.search}})
        .then(items => {
            res.render('list', {
                items: items
            })
        }).catch(err => {
            console.log(err)
        })
    }
    if (req.body.note === "on") {
        Item.findAll({ where: { note: req.body.search}})
        .then(items => {
            res.render('list', {
                items: items
            })
        }).catch(err => {
            console.log(err)
        })
    }
    if (req.body.dateDelivery === "on") {
        Item.findAll({ where: { dateDelivery: req.body.search}})
        .then(items => {
            res.render('list', {
                items: items
            })
        }).catch(err => {
            console.log(err)
        })
    }
    if (req.body.datePickup === "on") {
        Item.findAll({ where: { datePickup: req.body.search}})
        .then(items => {
            res.render('list', {
                items: items
            })
        }).catch(err => {
            console.log(err)
        })
    }
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
