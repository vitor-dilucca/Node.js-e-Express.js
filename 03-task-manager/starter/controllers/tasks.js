const Task = require('../models/task.js')

//para testar todas estas funções voce vai ir no postman e vai mandar uma request de acordo com a funçao q vc quiser testar ex:getAllTasks=request GET, getTask=request GET, e vc vai ter q inserir um ID do item q vc quiser recuperar especifico no url
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

//para usar vai no postman e no endereço {{URL}}/tasks/{id} manda um GET req
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}


async function deleteTask(req, res) {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    // res.status(200).send()
    // res.status(200).json({task:null, status:'success'})
    res.status(200).json({ task })
  } catch {
    res.status(500).json({ msg: error })
  }
}

const updateTask = async (req, res) => {
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
}

module.exports = {
  getAllTasks,
  createTask,
  getTask, updateTask, deleteTask
}