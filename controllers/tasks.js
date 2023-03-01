//import the schema model

const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getSingleTask = (req, res) => {
    const { id } = req.params
    res.status(200).send(`this is the  element with id ${id}`)
}
const createTask = async (req, res) => {
    try {
        // const {task} = req.body
        const task = await Task.create(req.body)
        res.status(200).json({ task })

    } catch (error) {

        res.status(500).json({ msg: error })

    }

}

const deleteTask = async (req, res) => {
    try {

        const { id } = req.params
        const task = await Task.findOneAndDelete({ _id: id })
        res.status(200).json({ task })
    } catch (error) {

        res.status(500).json({ msg: error })

    }
}

const updateTask = async (req, res) => {
    try {

        const { id } = req.params
        const task = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true, upsert: true })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
const deletAll = async (req, res) => {
    try {
        const task = await Task.deleteMany()
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}
module.exports = { getAllTasks, getSingleTask, createTask, deleteTask, updateTask, deletAll }