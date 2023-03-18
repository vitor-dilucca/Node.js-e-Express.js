const fs = require('fs')

const first = fs.readFileSync('./4.2content/first.txt')
const second = fs.readFileSync('./4.2content/second.txt','utf8')

console.log(first,second)