const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
        name: {

            type: String,
            required: [true, 'must provide a name'],
            trim: true,
            maxLength: [25, 'The name can not exced 20 characters']
        },
        completed: {
            type: Boolean,
            default: false

        }
    })

module.exports = mongoose.model('Task', TaskSchema)