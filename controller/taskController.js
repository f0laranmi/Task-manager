const Tasks = require('../models/task')

// creating the functions we need

const getAllTasks= async ( req, res)=> {
    try {
       const tasks = await Tasks.find()
       res.status(200).json({tasks})
    } catch (error) {
        res.json(error)
        console.log(error);
    }
}
const getSingleTask = async (req, res)=> {
    const {taskId} = req.params
   try {
     const task = await Tasks.findById({_id: taskId})
     res.status(200).json({task})
   } catch (error) {
    res.json(error)
}
}
const createTask = async (req, res)=>{
    try {
        const task = await Tasks.create(req.body)
        res.status(201).json({task})
      } catch (error) {
       res.json(error)
       console.log(error);
      }
}
const updateTask = async (req, res)=>{
    const {taskId} = req.params
  try {
    const task = await Tasks.findByIdAndUpdate({_id: taskId}, req.body,{
        new: true,
        runValidators: true
    })
    res.status(200).json({task})
  } catch (error) {
    res.json(error)
  }
}
const deleteTask = async (req, res)=>{
    const {taskId} = req.params
    try {
       await Tasks.findByIdAndDelete({_id: taskId}, req.body,{
        new: true,
        runValidators: true
       })
       res.status(200).json({success: true, msg: 'task deleted'})
    } catch (error) {
        res.json(error)
    }
}

module.exports ={
    getAllTasks, getSingleTask, updateTask, deleteTask, createTask
}