const { createReadStream } = require('fs')
const stream = createReadStream('../4.2content/8big.txt', { 
  highWaterMark: 90000, 
  encoding: 'utf8' 
})

//default 64kb
// last buffer - remainer
stream.on('data', (result) => {
  console.log(result)
})
stream.on('error',(err)=>console.log(err))