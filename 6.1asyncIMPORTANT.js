//codigo usando promises ainda
const fs = require('fs')
const util = require('util')

//promise do jeito bem feito usando a lib util(sem terminar)
const readFilePromise = util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.writeFile)


//com async-await
const start = async()=>{
  try {
    const first = await readFilePromise('./4.2content/first.txt', 'utf8')
    const second = await readFilePromise('./4.2content/second.txt', 'utf8')
    await writeFilePromise(
      './4.2content/result-6.1async.txt',`THIS IS AWESOMENESS: ${first} ======= ${second}`)
    console.log(first,second)
  } catch (error) {
    console.log(error)
  }
}
start()

    //Promise do jeito ruim
    // function getText(path){
    //   return new Promise((resolve, reject) => {
    //     fs.readFile(path, 'utf-8', (err, result) => {
    //       if (err) {
    //         reject(err)
    //       } else {
    //         resolve(result)
    //       }
    //     })
    //   })
    // }