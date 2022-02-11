const express = require('express')
const app = express()
const port = 3000
const route = require('./routes')
const ejs = require('ejs')
const {urlencoded} = require('express')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use('/', route)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) 