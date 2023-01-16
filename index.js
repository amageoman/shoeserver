
// import cors

const cors=require('cors')

// immport datasservice from service folder

const dataservice =require('./service/dataservice')

// immport jsonwebtoken



// import express
const express=require('express')
const { json } = require('express')

// create app
const app=express()


// connect frontend after creating app

app.use(cors({origin:'http://localhost:4200'}))

// to convert json data 

app.use(express.json())




app.get('/loaditems',(req,res)=>{
    dataservice.loaditems().then(result=>{
        res.json(result)
    })
})


app.post('/viewitem',(req,res)=>{
    dataservice.viewitem(req.body.name).then(result=>{
        res.json(result)
    })
})


app.post('/addtocart',(req,res)=>{

    dataservice.addtocart(req.body.name,req.body.price,req.body.color,req.body.size,req.body.img).then(result=>{
        res.json(result)
    })
})


app.get('/loadcart',(req,res)=>{
    dataservice.loadcart().then(result=>{
        res.json(result)
    })
})


app.post('/removeitem',(req,res)=>{
    dataservice.removeitem(req.body.name).then(result=>{
        res.json(result)
    })
})

app.post('/removeall',(req,res)=>{
    dataservice.removeall().then(result=>{
        res.json(result)
    })
})

app.listen(3001,()=>{
    console.log('server started at port number 3001');
})