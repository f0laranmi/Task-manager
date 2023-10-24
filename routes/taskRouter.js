const express = require('express')
const router = express.Router()

const{
    getAllTasks,
    getSingleTask ,
    createTask,
    updateTask,
    deleteTask} = require("../controller/taskController")

    const { get } = require('mongoose');

router.route('/').get(getAllTasks).post(createTask)
router.route('/:taskId').get(getSingleTask).patch(updateTask).delete(deleteTask)

// set up our routes

module.exports= router