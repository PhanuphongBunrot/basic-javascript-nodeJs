
var axios = require('axios');
import  https from "https";
// axios.get('http://127.0.0.1:8000/api/getaps').then(res => {
//   console.log(res.Max)
// }).catch(error =>{
//   console.log(er)
// })
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
axios.post('https://172.16.148.50:4343/rest/login',{
  httpsAgent ,
    user:'admin',
    passwork:'ssit1234'
}).then((res)=>{
  console.log(res)
},(error)=>{
  console.log(error)
})