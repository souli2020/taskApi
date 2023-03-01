const express = require('express')
const { getAllTasks, createTask, deleteTask, getSingleTask, updateTask, deletAll } = require('../controllers/tasks')
const router = express.Router()

router.get('/', getAllTasks)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.get('/:id', getSingleTask)
router.patch('/:id', updateTask)

//bonus
router.delete('/', deletAll)

module.exports = router