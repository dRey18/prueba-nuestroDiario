const express = require("express")
const mysql = require('mysql')
const conn = require('express-myconnection')
const routes = require('./routes')


const app = express ()
app.set('port', process.env.PORT || 9000)

const dbOption = {
    host:'localhost',
    user: 'root',
    port: 3306,
    password: 'admin'
}


//middlewares
app.use(conn(mysql, dbOption, 'single'))
app.use(express.json())

//Routes
app.get('/', (req, res)=>{
    res.send('API')
})
app.use('/api', routes)

//Server running
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get ('port'))
})
