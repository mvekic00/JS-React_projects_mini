const express=require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('This is homepage')
})

app.get('/services',(req,res)=>{
    res.send('This is data from backend which is written in node js application')
})

app.get('/players',(req,res)=>{
    const players=['messi','ronaldo','modric']
    res.send(players)
})

app.post('/login',(req,res)=>{
    var username = req.body.username
    var password = req.body.password

    if(username=='react' && password=='udemy')
    {
        res.send('Login Successful')
    }
    else{
        res.send('Login Failed')
    }
})

app.listen(5000,()=>{
    console.log('Server started on port')
})

