/*!
 * falsify-it
 * Copyright(c) 2018 Siegfried Grimbeek
 * ISC Licensed
 */

'use strict'

// Load external dependancies
const jsonServer = require('json-server')
const faker = require('faker')

// Json Server Setup
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({static: './publica'})
const port = 3000

var randomName = faker.name.findName()

// Server Initialization
server.use('/api', router)
server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log(randomName)
  console.log('JSON Server is running on port: http://localhost:' + port)
})
