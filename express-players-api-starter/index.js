const express = require('express')
const db = require('./database')

const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

const app = express()
const port = process.env.PORT || 3030

app.get('/', (req, res) => {
  res.json({ message: 'Yo!' })
})

app.listen(port, () => {
  console.log(`
Server is listening on ${port}.

Open http://localhost:${port}

to see the app in your browser.
    `)
})


// Model
let Players = sequelize.define('players', {
  name: Sequelize.STRING,
  score: Sequelize.INTEGER,
}, {
  tableName: 'Players'
})

app.get('/players', (request, response) => {
  Players.findAll().then(Players => {
    response.send({ Players})
  })
})
