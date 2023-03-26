//codigo usando promises ainda
const fs = require('fs')

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

//com promise
getText('./4.2content/first.txt')
  .then(result => console.log(result))
  .catch((err)=>console.log(err))

// com async-await
/* const start = async()=>{
  try {
    const first = await getText('./4.2content/first.txt')
    const second = await getText('./4.2content/second.txt')
    console.log(first,second)
  } catch (error) {
    console.log(error)
  }
}
start()
 */