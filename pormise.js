// สร้าง promise
const connect = true
const url1 = ['love/api/json1' ,'love/api/json2' ,'love/api/json3']
// const url1 = 'love/api/json1'
// const url2 = 'love/api/json2'
// const url3 = 'love/api/json3'
function downloading (url){
    return new Promise(function(resolve,reject){
        console.log(`loading ...   ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`loading..... ${url}  success`)
            }else{
                reject(`loading.....  ${url}  error`)
            }
        },3000)
       
    })
}





// downloading(url1).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })

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

// for(let i = 0 ; i < url1.length ; i++){
//     downloading(url1[i]).then(function(result){
//         console.log(result)
//     }).catch(err=>{
//             console.log(err)
//         })
// }

//Async & Await 
async function start(){
    for(let i = 0 ; i < url1.length ; i++){
    console.log(await downloading(url1[i])) 
    }
}
start()

