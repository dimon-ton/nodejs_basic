const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const name = "pimon tungratog"
    const age = 17
    const address = "<h3>กรุงเทพ หาดใหญ่</h3>"
    res.render('index',{name:name,age:age,address:address})
})
const path = require('path')



module.exports = router