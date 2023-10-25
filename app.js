require('dotenv').config()
const express = require('express')
const app = express()


//Middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use('view','ejs')

//Env and port setup
const PORT = process.env.PORT || 3001
const URI = process.env.URI



//Home route

app.get('/',(req,res)=>{
    res.send("Hello there welcome to Realengine skelton")
})

//Connection setup server and database

app.listen(PORT,()=>{
    console.log(`Port running on http://localhost:${PORT} succesfully...`)
})