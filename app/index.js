const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql')

var connection = mysql.createConnection({
  host:  '192.168.99.100',  //docker-machine for dev 'localhost',
  user: 'root',
  password: 'secret',
  database: 'demo'
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The query result is: ', rows[0].solution)
})

connection.end()
