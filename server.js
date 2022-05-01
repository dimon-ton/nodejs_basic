const http = require('http')

const server = http.createServer((req,res)=>{
    const myHtml = `
    <h1>hell pimon tungratog</h1>
    <p>chang studio</p>
    `
    res.write(myHtml)
    res.end()
})

server.listen(8080,'localhost',()=>{
    console.log('start server in port 8080')
})