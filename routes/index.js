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

router.post("/items/:id", (req, res) => {
    Item.findOne({ where: { id: req.params.id } })
    .then(item => {
        item.update({
            name: req.body.name,
            catalog: req.body.catalog,
            serial: req.body.serial,
            location: req.body.location,
            note: req.body.note,
            dateDeliver: req.body.dateDeliver,
            datePickup: req.body.datePickup
        })
    })
    .then(() => {
        res.render('landingpage')
    }).catch(err => {
        console.log(err)
    })
})    


router.get('/searchname', (req, res) => {
    res.render('searchname')
})

router.get('/searchcat', (req, res) => {
    res.render('searchcat')
})

router.get('/searchser', (req, res) => {
    res.render('searchser')
})

router.get('/searchloc', (req, res) => {
    res.render('searchloc')
})

router.post('/searchloc', (req, res) => {
    Item.findAll({ where: { location: req.body.search}})
    .then(items => {
        res.render('list', {
            items: items
        })
    }).catch(err => {
        console.log(err)
    })
})

router.post('/searchcat', (req, res) => {
    Item.findAll({ where: { catalog: req.body.search}})
    .then(items => {
        res.render('list', {
            items: items
        })
    }).catch(err => {
        console.log(err)
    })
})

router.post('/searchser', (req, res) => {
    Item.findAll({ where: { serial: req.body.search}})
    .then(items => {
        res.render('list', {
            items: items
        })
    }).catch(err => {
        console.log(err)
    })
})


router.post('/searchname', (req, res) => {
    Item.findAll({ where: { name: req.body.search}})
    .then(items => {
        res.render('list', {
            items: items
        })
    }).catch(err => {
        console.log(err)
    })
})




// router.get('/search', (req, res) => {
//     res.render('search')
// })

// router.post('/search', (req, res) => {
//     let selectedType
//     if (req.body.name === "on") {
//         Item.findAll({ where: { name: req.body.search}})
//         .then(items => {
//             res.render('list', {
//                 items: items
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
//     if (req.body.catalog === "on") {
//         Item.findAll({ where: { catalog: req.body.search}})
//         .then(items => {
//             res.render('list', {
//                 items: items
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
//     if (req.body.serial === "on") {
//         Item.findAll({ where: { serial: req.body.search}})
//         .then(items => {
//             res.render('list', {
//                 items: items
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
//     if (req.body.location === "on") {
//         Item.findAll({ where: { location: req.body.search}})
//         .then(items => {
//             res.render('list', {
//                 items: items
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
//     if (req.body.note === "on") {
//         Item.findAll({ where: { note: req.body.search}})
//         .then(items => {
//             res.render('list', {
//                 items: items
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
//     if (req.body.dateDelivery === "on") {
//         Item.findAll({ where: { dateDelivery: req.body.search}})
//         .then(items => {
//             res.render('list', {
//                 items: items
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
//     if (req.body.datePickup === "on") {
//         Item.findAll({ where: { datePickup: req.body.search}})
//         .then(items => {
//             res.render('list', {
//                 items: items
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// })

//router.post('/items/:id')

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
        note: req.body.note,
        dateDeliver: req.body.dateDeliver,
        datePickup: req.body.datePickup
    }).then(() => {
        res.render('landingpage')
    }).catch((err) => {
        console.log(err)
    })
})

export default router
