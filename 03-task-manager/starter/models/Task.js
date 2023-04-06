const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'must provide name'],
    //trim retira os espaços vazios
    trim:true,
    maxlength:[20,'name can not be more than 20 characters']
  },
  completed:{
    type:Boolean,
    // required:true,
    trim:true,
    // default:false
  },
})

module.exports = mongoose.model('Task',TaskSchema)