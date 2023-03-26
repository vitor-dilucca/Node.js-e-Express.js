//codigo usando promises ainda
const fs = require('fs')
const util = require('util')

//promise do jeito bem feito usando a lib util(sem terminar)
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

//Promise do jeito ruim
function getText(path){
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

//com async-await
const start = async()=>{
  try {
    const first = await getText('./4.2content/first.txt')
    const second = await getText('./4.2content/second.txt')
    console.log(first,second)
  } catch (error) {
    console.log(error)
  }
}
start()
