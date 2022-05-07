// ใช้งาน mongooose
const mongoose = require('mongoose')

//เชื่อมไปยัง mongoDB
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))
//ออกแบบ Schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

//สร้างโมเดล
let Product = mongoose.model("products",productSchema)


//ส่งออกโมเดล
module.exports = Product