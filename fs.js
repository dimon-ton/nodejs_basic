//Blocking

const fs = require('fs')
/*
const data = fs.readFileSync('myFile/input.txt','utf-8')

console.log(data)
console.log('finish work')

//เขียนไฟล์

const outputtxt = `hello node.js\n ${data} \n ไฟล์ถูกเขียนเมื่อ ${new Date}`
fs.writeFileSync('myFile/output.txt',outputtxt)
console.log('เขียนไฟล์เรียบร้อย')
*/
fs.readFile('myFile/input.txt','utf-8',(err,data)=>{
    if(err) return console.log('เกิดข้อผิดพลาด',err)
    const outputtxt = `Hello node.js\n${data}\nไฟล์นี้ถูกเขียนเมื่อ${new Date()}`
    fs.writeFile('myFile/output.txt',outputtxt,err=>{
        if(err) return console.log('เกิดข้อผิดพลาด',err)
        console.log('จบการทำงาน')
    })
})

