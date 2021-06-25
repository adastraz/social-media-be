const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authenticate = require('./auth/authenticate-middleware.js')
const authRouter = require('./auth/auth-router.js')
const usersRouter = require('./users/users-router.js')
const friendsRouter = require('./friends/friends-router.js')
const postsRouter = require('./posts/posts-router.js')
const likesRouter = require('./likes/likes-router.js')
const commentsRouter = require('./comments/comments-router.js')
const ViewPosts = require('./viewposts/viewposts-router.js')
const ViewUser = require('./viewuser/viewuser-router.js')
const tournamentsRouter = require('./tournaments/tournaments-router.js')
const viewtournamentsRouter = require('./tournaments/viewtournaments-router.js')
const gamesRouter = require('./games/games-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/viewposts', ViewPosts)
server.use('/api/viewuser', ViewUser)
server.use('/api/users', authenticate, usersRouter)
server.use('/api/friends', authenticate, friendsRouter)
server.use('/api/posts', authenticate, postsRouter)
server.use('/api/likes', authenticate, likesRouter)
server.use('/api/comments', authenticate, commentsRouter)
server.use('/api/tournaments', authenticate, tournamentsRouter)
server.use('/api/viewtournaments', viewtournamentsRouter)
server.use('/api/games', authenticate, gamesRouter)

server.get('/', (req, res) => {
    const response = ({
        message: "API is up and running!"
    })
    res.status(200).json(response)
})

module.exports = server