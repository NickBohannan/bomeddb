import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

import indexRouter from './routes/index'
import Item from './models/item'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use('/', indexRouter)

const port = precess.env.PORT || 8080

app.set('port', port)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})

Item.sync()

export {app, path}
