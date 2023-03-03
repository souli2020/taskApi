const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const errorHandler = require('./middlewares/error-handler')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

//middleware
app.use(express.static('./public'))
app.use(express.json())
//error handler 
app.use(errorHandler)

//Route
app.use('/api/v2/tasks', tasks)

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`server listening to ${PORT}`))

    } catch (error) {
        console.log(error)
    }

}

start()