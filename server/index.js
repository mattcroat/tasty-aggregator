// We're using babel to use the latest and greates JS syntax,
// nodemon watches any changes to the files and uses babel to transpile our JS
// nodemon --exec babel-node index.js

import express from 'express'
// Cross-origin resource sharing
import cors from 'cors'
// Best practice to store sensitive data,
// you want to put the .dotenv in .gitignore
// and use an example one if you want to show how to set it up to others,
// when you're hosting the site you input the variables there
import dotenv from 'dotenv'

// Our posts
import data from './data.json'

// Config
dotenv.config()

// Initialize express app
const app = express()

// Return request as json middleware,
// you'll often see people use body-parser
// but it's baked into express now
app.use(express.json())
// Cors middleware
app.use(cors())

// Our route that triggers the GET request for our posts
app.get(`/posts`, (request, response) => {
	// JSON response
	response.json(data)
})

// Server port, process.env is a built-in node thing
const { PORT } = process.env

// Listen to the port
app.listen(PORT, error => {
	error ? console.error(`💩`, error) : console.log(`Running on port ${PORT}`)
})
