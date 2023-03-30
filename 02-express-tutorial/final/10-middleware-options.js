const app = require('express')()
// const authorize = require('./authorize')
const morgan = require('morgan')
//req => middleware => res
/* app.use(
  [
    function logger(req, res, next) {
      const method = req.method
      const url = req.url
      const time = `${new Date().getFullYear()}`
      console.log(method, url, time);
      // res.send('Test')
      next()
    },

    authorize
  ]
) */
app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
}) 