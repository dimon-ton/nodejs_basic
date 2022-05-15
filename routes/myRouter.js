const express = require('express')
const router = express.Router()
//เรียกใช้งานโมเดล
const Product = require('../model/products')

//อัพโหลดไฟล์
const multer = require('multer')
const { rawListeners } = require('../model/products')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/products')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg")// เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำ
    }
})

//เริ่มต้นอัพโหลด
const upload = multer({
    storage:storage
})

router.get('/',(req,res)=>{
    Product.find().exec((err,doc)=>{
        res.render('index',{products:doc})
    })
    
})

router.get('/add-product',(req,res)=>{
    if(req.cookies.login){
        res.render('form')
    }else{
        res.render('admin')
    }  
})

router.get('/manage',(req,res)=>{
    if(req.cookies.login){
        Product.find().exec((err,doc)=>{
            res.render('manage',{products:doc})
        })
    }else{
        res.render('admin')
    }
   
})

router.get('/logout',(req,res)=>{
    res.clearCookie('username')
    res.clearCookie('password')
    res.clearCookie('login')
    res.redirect('/manage')
   
 })
 
router.get('/delete/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id,{useFindAndModify:false}).exec(err=>{
        if (err) console.log(err)
        res.redirect('/manage')
    })
   
})

router.post('/insert',upload.single("image"),(req,res)=>{
   
    console.log(req.body)
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        description:req.body.description
    })
    Product.saveProduct(data,(err)=>{
        if(err) console.log(err)
        res.redirect('/')
    })
})

router.get('/:id',(req,res)=>{
    const product_id = req.params.id
    Product.findOne({_id:product_id}).exec((err,doc)=>{
        res.render('product',{product:doc})
    })
    
  })

  router.post('/edit',(req,res)=>{
   const edit_id = req.body.edit_id
   Product.findOne({_id:edit_id}).exec((err,doc)=>{
        res.render('edit',{product:doc})
    })
  
})

router.post('/update',(req,res)=>{
   
    const update_id = req.body.update_id
    let data = {
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    }
    // อัพเดดข้อมูล
    Product.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).exec(err=>{
        res.redirect('/manage')
    })
})


router.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const timeExpire = 30000

    if (username === "admin" && password === "123") {
        res.cookie('username',username,{maxAge:timeExpire})
        res.cookie('password',password,{maxAge:timeExpire})
        res.cookie('login',true,{maxAge:timeExpire})
        res.redirect('/manage')
    }else{
        res.render('404')
    }
})



module.exports = router