const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const app = express()

//middleware
app.use(express.static('./public'))
app.use(express.json())

//Route
app.use('/api/v2/tasks', tasks)

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(5000, console.log("server started at 5000"))

    } catch (error) {
        console.log(error)
    }

}

start()