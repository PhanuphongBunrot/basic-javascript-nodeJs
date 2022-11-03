// callback function

function download(url,callback){
    console.log(`load ${url}`)
    setTimeout(()=>{
        callback(url)
    },3000)
  
}

let url2 = "google/api/json1"
let url3 = "google/api/json2"
let url4 = "google/api/json3"
download(url2,function  (resulr){
    console.log(`load ${resulr} success`)
    download(url3,function (resulr){
        console.log(`load ${resulr} success`)
    })
    
})


