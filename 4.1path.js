const path = require('path')

console.log(path.sep)

const filePath = path.join('./4.2content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'3.0modules.js')
console.log(absolute)