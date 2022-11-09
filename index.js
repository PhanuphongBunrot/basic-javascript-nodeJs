//  const mymodule = require('./module/mymodule.js')
// const add = require("./module/mymodule").add

// const num = 500000000000
//  console.log(mymodule.formatNumber(num))
//  console.log(add(9,5))
//-----------------------------------------------------//
//blocking
// const fs = require('fs')

// // อ่านไฟลื input.txt
// const  data =  fs.readFileSync('module/input.txt','utf-8')
// console.log(data)
// console.log("end...")

// //เขียนไฟล์
// const outputText = `Hello Node.js \n ${data}\n Save Time ${new Date()}`
// fs.writeFileSync("module/output.txt",outputText)
// console.log("success")

// Non-blocking
const fs = require('fs')
// อ่านไฟลื input.txt
fs.readFile("module/input.txt","utf-8",(err,data)=>{
    if(err) return console.log("error",err)
    const outputText2 = `Hello Nide.js \n ${data} \n read file date ${new Date()}`
    fs.writeFile("module/output.txt",outputText2,err => {
        if(err) return console.log("error",err)

    })
})
