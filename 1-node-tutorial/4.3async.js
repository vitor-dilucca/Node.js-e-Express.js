const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./4.2content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return;
  }
  const first = result
  readFile('./4.2content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err)
      return;
    }
    const second = result
    writeFile(
      './4.2content/4.4result-async.txt',
      `4.3Here is the result-async: ${first}, ${second}!!!!`,
      (err,result)=>{
        if(err){
          console.log(err)
          return
        }
        console.log('done with this task')
        // console.log(result)
      }
    )
  })

})
      console.log('starting next task')