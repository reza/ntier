const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql')
var motd = "Hello"
var connection = mysql.createConnection({
  host:  'db', //'192.168.99.100',  //docker-machine for dev 'localhost',
  user: 'root',
  password: 'secret',
  database: 'demo'
})

app.get('/', function (req, res) {

  connection.query('SELECT * FROM motd', function (err, rows, fields) {
    if (err) throw err
    motd=rows[0].message
    console.log('Mysql DB Query Result:', motd)
  })
  res.send(motd)
})

app.listen(port, () => console.log('App listening on port:'+ port) )


