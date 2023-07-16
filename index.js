const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()
const app = express()

app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/',(req, res) => {
    console.log("hello word")
    res.send('hello word!!')
})

app.get('/attractions', (req, res) => {
    connection.query(
        'SELECT COUNT(*) as cout FROM attractions',
        function(err, results, fields) {
            console.log(results)
            res.send(results)
        }
    )
})

app.get('/attractions/get', (req, res) => {
    connection.query(
        'SELECT * FROM attractions',
        function(err, results, fields) {
            console.log(results)
            res.send(results)
        }
    )
})


app.listen(process.env.PORT || 3000)
