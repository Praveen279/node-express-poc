const express = require('express')
const app = express()
const db = require('./oDBConfig').db

app.use('/', function (req, res) {
  for(let i=0; i<=10; i++) {
    db.query('select from fruits').then(response => console.log('success'))
    db.query('select from fruits').then(response => console.log('success1x'))
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
