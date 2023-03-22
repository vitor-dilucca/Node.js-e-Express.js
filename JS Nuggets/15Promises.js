const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)
  console.log(random) //printa o numero aleatorio de vez
  if (random === 2) {
    resolve('you guessed correctly')
  }
  reject('wronge number')
})

console.log(promise); 

promise.then((data) =>
  console.log(data)).
  
  catch((err) =>
    console.log(err))