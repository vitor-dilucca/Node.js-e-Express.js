//jeito com event.on, simples
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  res.end('Welcome')
})
server.listen(5000)

//jeito antigo, complicado
/* const http = require('http')
const server = http.createServer((req,res)=>{
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
})
server.listen(5000) */