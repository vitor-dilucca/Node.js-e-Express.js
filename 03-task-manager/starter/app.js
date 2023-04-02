const express = require('express')
const app = express()
const tasks=require('./routes/tasks')
const port = 3000

app.use(express.json())
 
app.get('/hello', (req,res)=>{
  res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

app.listen(port,()=>{
  console.log(`SErver is listening on port ${port}`);
}) 