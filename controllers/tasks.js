//import the schema model

const Task = require('../models/task')
const noTry = require('../middlewares/noTry')

const getAllTasks = async (req, res) => {
    const tasks = await Task.find({})
    // if (tasks.length < 1) {
    //     return res.status(404).json({ msg: "No tasks" })
    // }
    res.status(200).json({ tasks })
}

const getSingleTask = async (req, res) => {
    const { id } = req.params
    const task = await Task.findOne({ _id: id })
    if (!task) {
        return res.status(404).json(`no task found with id : ${id}`)
    }
    res.status(200).json({ task })
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    const task = await Task.findOneAndDelete({ _id: id })
    if (!task) {
        return res.status(404).json(`no task found with id : ${id}`)
    }
    res.status(200).json({ task })
}

const updateTask = async (req, res) => {
    const { id } = req.params
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
    // if (!task) {
    //     return res.status(404).json(`no task found with id : ${id}`)
    // }
    res.status(200).json({ task })
}

const deleteAllTasks = async (req, res) => {
    const task = await Task.deleteMany()

    res.status(200).json({ msg: "All tasks deleted" })
}

module.exports = {
    getAllTasks: noTry(getAllTasks),
    getSingleTask: noTry(getSingleTask),
    createTask: noTry(createTask),
    deleteTask: noTry(deleteTask),
    updateTask: noTry(updateTask),
    deleteAllTasks: noTry(deleteAllTasks)
}