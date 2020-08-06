const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../database/config/secrets.js')

const Users = require('../users/users-model.js')

router.post('/register', validateRegCred, (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    Users.add(user)
        .then(saved => res.status(200).json(saved))
        .catch(err => res.status(401).json(err))
})

router.post('/login', validateLoginCred, (req, res) => {
    let { username, password } = req.body
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)

                res.status(200).json({ user, token })
            } else {
                res.status(401).json({ message: 'Invalid password'})
            }
        })
        .catch(err => res.status(500).json({ message: 'something went wrong, or incorrect username', error: err}))
})

function validateLoginCred (req, res, next) {
    if (req.body.username && req.body.password) {
        next()
    } else {
        res.status(500).json({ message: 'enter a username and password' })
    }
}

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[`~!@#$%^&*()_=<+>?=.,]).{8,20}$/i

function validateRegCred (req, res, next) {
    if (req.body.username && req.body.password && req.body.birthday) {
        if (passwordPattern.test(req.body.password)) {
            next()
        } else {
            res.json({ message: 'does not meet password requirements' })
        }
    } else {
        res.status(500).json({ message: 'enter a username, password, and birthday' })
    }
}

function generateToken (user) {
    const payload = {
        id: user.id,
         username: user.username,
    }
    const options = {
        expiresIn: '1hr'
    }
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router