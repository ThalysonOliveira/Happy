const { static } = require('express')
const express = require('express')
const server = express()
const path = require('path')
const pages = require('./pages')

server.use(express.static('public'))

.use(express.urlencoded({extended:true}))

.set('views',path.join(__dirname,'views'))
.set('view engine','hbs')

.get('/',pages.index)
.get('/orphanage',pages.orphanage)
.get('/orphanages',pages.orphanages)
.get('/create-orphanage',pages.createOrphanage)
.post('/save-orphanage',pages.saveOrphanage)



server.listen(3333)