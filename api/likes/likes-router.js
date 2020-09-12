const router = require('express').Router()

const Likes = require('./likes-model.js')
const Users = require('../users/users-model.js')

router.get('/:id/post', (req, res) => {
    const { id } = req.params

    Likes.findById(id)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ message: 'could not find posts', err }))
})

router.get('/:id/user', (req, res) => {
    const { id } = req.params

    Users.findById(id)
        .then(users => {
            Likes.findByUsername(users.username)
                .then(posts => res.status(200).json(posts))
                .catch(err => res.status(404).json({ message: 'could not find posts', err}))
        })
        .catch(err => res.status(500).json({ message: 'could not find user', err }))
})

module.exports = router