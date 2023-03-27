const fs = require('fs')

console.log('iniciou a primeira task')
fs.readFile('./4.2content/first.txt','utf-8',(err,result)=>{
  if (err) {
    console.log(err)
    return
  }
  console.log(result);
  console.log('completada primeira task');
})
console.log('iniciando proxima task');