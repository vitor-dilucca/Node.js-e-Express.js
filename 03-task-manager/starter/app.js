const express = require('express')
const app = express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const port = 3000

//middleware
app.use(express.static('./public'))
app.use(express.json())
 
//routes
app.use('/api/v1/tasks',tasks)

const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
      console.log(`SErver is listening on port ${port}`);
    }) 
  } catch (error) {
    console.log(error)
  }
}

start()
//tava backtracking p ver se arrumava o erro do tasks.js no 1:16:00 funciona apesar q aparece erro la entao fodase vou voltar de onde parei la no 1:50:00 qualquer coisa volto depois