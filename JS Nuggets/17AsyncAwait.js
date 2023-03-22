const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' },
]

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five',] },
  { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
]




function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name)
    if (user) {
      return resolve(user)
    } else {
      reject(`No such user with name:${name}`)
    }
  })
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId)

    if (userArticles) {
      return resolve(userArticles.articles)
    } else {
      reject(`Wrong ID`)
    }
  })
}

//jeito promises menos efetivo
//retorna os artigos da pessoa escolhida

/* getUser('anna')
  .then((user) => getArticles(user.id))
  .then((articles) => console.log(articles))
  .catch((err) => console.log(err)) */

//jeito async/await mais efetivo
//retorna os artigos da pessoa escolhida
async function getData() {
  try {
    const user = await getUser('john')
    const articles = await getArticles(user.id)
    console.log(articles)
  } catch (error) {
    console.log(error)
  }
}
getData()