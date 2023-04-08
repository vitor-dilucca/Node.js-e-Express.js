const Task = require('../models/task.js')
const asyncWrapper = require('../middleware/async.js')
const {createCustomError} = require('../errors/custom-error.js')
//para testar todas estas funções voce vai ir no postman e vai mandar uma request de acordo com a funçao q vc quiser testar ex:getAllTasks=request GET, getTask=request GET, e vc vai ter q inserir um ID do item q vc quiser recuperar especifico no url
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
  // res.status(200).json({ tasks,amount:tasks.length })
  // res.status(200).json({ success: true, data: { tasks, nbHits: tasks.length } })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

//para usar vai no postman e no endereço {{URL}}/tasks/{id} manda um GET req
const getTask = asyncWrapper(async (req, res,next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`,404))
  }
  res.status(200).json({ task })
})


const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`,404))
  }
  // res.status(200).send()
  // res.status(200).json({task:null, status:'success'})
  res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true
  })
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`,404))
  }
  res.status(200).json({ task })
})
/* 
const editTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true, 
      runValidators: true
    })
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
} */

module.exports = {
  getAllTasks,
  createTask,
  getTask, updateTask, deleteTask/* ,
  editTask */
}