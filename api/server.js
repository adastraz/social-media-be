const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authRouter = require('../auth/auth-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
    const response = ({
        message: "API is up and running!"
    })
    res.status(200).json(response)
})

module.exports = server