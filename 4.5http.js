const http = require('http')

//executa este codigo no terminal >node 4.5http.js
//e recarrega a pagina no endereço localhost:5000 para ver a mensagem 
const server = http.createServer((req,res)=>{
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }else if (req.url === '/about') {
    res.end('Here is some history in our about page')
  }else{
    res.end(`
    <h1>Oops! this page does not exist</h1>
    <p>We canst seem to find the page you are looking for</p>
    <a href="/">Home</a>
    `)
  }
})

server.listen(5000)