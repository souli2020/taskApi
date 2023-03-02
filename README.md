# Task Manager API

This is a task manager API built using Node.js, Express.js, MongoDB, and Mongoose. It provides basic CRUD functionality for managing tasks.

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository: `git clone https://github.com/souli2020/taskApi.git`
2. Install dependencies: `npm install`
3. Set environment variables:
   - `PORT`: The port number to run the server on (default: 5000)
   - `MONGODB_URI`: The URI of your MongoDB database
4. Start the server: `npm start`

## API Documentation

### Tasks

- `GET api/v2/tasks`: Get all tasks
- `GET api/v2/tasks/:id`: Get a task by ID
- `POST api/v2/tasks`: Create a new task
- `PATCH api/v2/tasks/:id`: Update a task by ID
- `DELETE api/v2/tasks/:id`: Delete a task by ID
- `DELETE api/v2/tasks`: Delete all tasks (not from the front-end)

#### Request Headers

None required.

#### Response Body

- `name`: The name of the task (string).
- `_id`: The id of the task.
- `completed`: Whether the task is completed or not (boolean).

## Middlewares

### Authentication

Not implemented.

### Error Handling

Using a middleware that handles errors thrown by controllers and returns a JSON response with the error message and status code and avoid the try-catch blocks mess.

## Controllers

### Task Controller

This controller handles requests related to tasks.

## License

This project is licensed under the MIT License.
