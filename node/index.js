

const db = require('./db')
const express = require('express')
const routes = express.Router()
const server = express()
const nunjucks = require("nunjucks")

server.use(express.static('./'));
server.set('view engine', 'njk')

nunjucks.configure('./', {
  express : server,
  autoescape:false, 
  noCache:true 
})


routes.get('/', async function (req, res) {
  const peoples = await db.selectAllPeoples()
  return  res.render("content", {peoples});
})
server.use(routes)

const port = 3000

server.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})