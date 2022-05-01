

//สร้าง promise
const connect = true
const url1 = 'kong.dev/file1.json'
const url2 = 'kong.dev/file2.json'
const url3 = 'kong.dev/file3.json'
const url4 = 'kong.dev/file4.json'
const url5 = 'kong.dev/file5.json'


function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`downloading file from ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`load ${url} completely`)
            }else{
                reject(`found error`)
            }
        },1000)
       
    })
}

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))

}

start()

// downloading(url1).then(function(result){
//     console.log(result)
//     downloading(url2).then(function(result){
//         console.log(result)
//     })
// })

// downloading(url1).then(function(result){
//     console.log(result)
//     return downloading(url2)
// }).then(function(result){
//     console.log(result)
//     return downloading(url3)
// }).then(function(result){
//     console.log(result)
// })

const util = require('./myModule/module')
const now = require('./myModule/module').getCurrentTime

console.log(util.add(5,4))
console.log(now())
