const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))


app.get('/user', (req,res)=>{
    res.status(200).send({
        id: 1,
        name : "Anand Verma hello here in Gh"
    })
})

app.get('/user-detail', (req,res)=>{
    re.status(200).send({
        id: 1,
        name : "Anand Verma",
        address: "United states",
        education: "University of Maryland, College park"
    })
})


app.listen(5001, ()=>{
    console.log('Project 1 is listening on port 5001.')
})