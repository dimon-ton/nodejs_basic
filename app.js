const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const router = require('./routes/myRouter')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(router)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))


app.listen(8080,()=>{
    console.log("start server at 8080")
})