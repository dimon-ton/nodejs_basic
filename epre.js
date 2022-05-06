const express = require('express')
const path = require('path')
const app = express()

const indexPage = path.join(__dirname,'/template/index.html')



app.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(indexPage)
})

app.get("/product",(req,res)=>{
    res.sendFile(path.join(__dirname,'/template/product1.html'))
})

app.listen(8080,()=>{
    console.log("start server at 8080")
})