const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const products = ["clothes","fan","earbud","keaboard","table","router"]
    res.render('index',{products:products})
})




module.exports = router