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

const deleteTask = (req, res) => {
    const { id } = req.params
    res.status(200).send(`the element with id ${id} was deleted`)
}

const updateTask = (req, res) => {
    const { id } = req.params
    res.status(200).send(`the element with id ${id} was updated`)

}
const deletAll = (req, res) => {
    res.status(200).send('all tasks deleted!')
}
module.exports = { getAllTasks, getSingleTask, createTask, deleteTask, updateTask, deletAll }