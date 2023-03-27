const fs = require('fs')
console.log('start')
const first = fs.readFileSync('./4.2content/first.txt')
const second = fs.readFileSync('./4.2content/second.txt','utf8')

fs.writeFileSync(
  './4.2content/4.2result-sync.txt',
  `4.3Here is the result-async: ${first}, ${second}!!!!`,
  {flag:'a'}
)

console.log('done with this task')
console.log('starting the next one')