const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("<h1>Hello Nes</h1>")
    res.end()
})
let  post = 3000
server.listen(post,()=>{
    console.log(`start server in post ${post}` )
})