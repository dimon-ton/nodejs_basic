const express = require('express')
const router = express.Router()
const path = require('path')

const indexPage = path.join(__dirname,'../template/index.html')

router.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(indexPage)
})

router.get("/product/:id",(req,res)=>{
    // res.sendFile(path.join(__dirname,'../template/product1.html'))
    const productID = req.params.id
    if(productID === "1"){
        res.sendfile(path.join(__dirname,"../template/product1.html"))
    } else if (productID === "2") {
        res.sendfile(path.join(__dirname,"../template/product2.html"))
    } else if (productID === "3") {
        res.sendfile(path.join(__dirname,"../template/product3.html"))
    } else {
        res.redirect('/')
    }
})

module.exports = router