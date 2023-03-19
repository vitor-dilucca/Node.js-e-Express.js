const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req)
  //executa este codigo no terminal >node 4.5http.js
  //e recarrega a pagina no endereço localhost:5000 para ver a mensagem 
  res.write('Welcome to our home page')
  res.end()
})

server.listen(5000)