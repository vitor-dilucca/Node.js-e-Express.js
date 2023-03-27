const http = require('http')
const {readFileSync, read} = require('fs')

//get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  if(url==='/'){
    // res.writeHead(200, { 'content-type': 'text/plain' })
    res.writeHead(200, { 'content-type': 'text/html' })
    // res.write('<h1>home page</h1>')
    res.write(homePage)
    res.end()
  }else if(url==='/about'){
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>ABOUT page</h1>')
    res.end()
    
  }else{
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>PAGE NOT FOUND</h1>')
    res.end()
    
  }
})

server.listen(5000)