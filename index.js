const express = require('express')
const app = express()
const router = require('./routers/index')

app.set('view engine', 'ejs')

app.use('/', router)

app.listen(3000)