const http = require('http')

const server = http.createServer((req,res)=>{

    const myhtml = `
    <h1>Hello Nes</h1>
    
    `

    res.write(myhtml)
    res.end()
})
let  post = 8080
// server.listen(post,()=>{
//     console.log(`start server in post ${post}` )
// })

server.listen(8080,'localhost',()=>{
    console.log(`start server in post ${post}` )
})