

fetch('https://172.16.148.50:4343/rest/login', {
    method: 'POST',
    Headers: {
     
      'Content-Type': 'application/json'
    },
    Body: body,
    user: 'admin',
    passwd:'ssit1234'
  })