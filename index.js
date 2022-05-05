//--------------------------------------variable--------------------------------------

const url1 = 'kong.dev/file1.json'
const url2 = 'kong.dev/file2.json'
const url3 = 'kong.dev/file3.json'
//1.--------------------------------------Callback--------------------------------------


// function downloading(url,callback){
//         console.log(`กำลังโหลดไฟล์จาก ${url}`)
//     setTimeout(() => {
//        callback(url)
//     }, 1000);
// }



// downloading(url1,function(result){
//     console.log(`ดาวโหลด ${result} เรียบร้อย`)
//     downloading(url2,function(result){
//         console.log(`ดาวโหลด ${result} เรียบร้อย`)
//         downloading(url3,function(result){
//             console.log(`ดาวโหลด ${result} เรียบร้อย`)
//         })
//     })
// })

//2.--------------------------------------Promise--------------------------------------
const connect = true
function donwloadFile(url){
    console.log(`กำลังดาวโหลดข้อมูลจาก ${url}`)
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(connect){
                resolve(`โหลด ${url} เรียบร้อย`)
            }else{
                reject('เกิดข้อผิดพลาด')
            }
        }, 3000);
    })
}

//2.1--------------------------------------then, catch, finally--------------------------------------
            // donwloadFile(url1).then(function(result){
            //     console.log(result)
            //     return donwloadFile(url2)
            // }).then(function(result){
            //     console.log(result)
            //     return donwloadFile(url3)
            // }).then((result)=>{
            //     console.log(result)
            // }).catch((result)=>{
            //     console.log(result)
            // }).finally(()=> console.log('จบการทำงาน'))

//2.2--------------------------------------Async and Await--------------------------------------

            async function start(){
                console.log(await donwloadFile(url1))
                console.log(await donwloadFile(url2))
                console.log(await donwloadFile(url3))
            }

            start().catch((result)=>{
                console.log(result)
            }).finally(()=>{
                console.log('จบการทำงาน')
            })