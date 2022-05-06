const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index.ejs')
})
const path = require('path')



module.exports = router