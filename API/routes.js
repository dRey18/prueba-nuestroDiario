const express = require ('express')
const routes = express.Router()


routes.get('/', (req, res)=>{
    req.getConnection((err, connec)=>{
        if(err) return res.send(err)  
        
        connec.query('SELECT * FROM users.usuarios', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, connec)=>{
        if(err) return res.send(err)
        
       connec.query('INSERT INTO users.usuarios set ?', [req.body],  (err, rows)=>{
            if(err) return res.send(err)
            res.send('usuario added!')
        })
    })
})
module.exports = routes;